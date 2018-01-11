<template>
	<div class="main wrap">
		<Card class="article">
			<div slot="title">
				<h1>文章标题</h1>
				<div v-if="tags.length > 0" class="article-tags">
					<Tag v-for="tag in tags" :key="tag.id"><router-link :to="/tag/ + tag.id">{{tag.name}}</router-link></Tag>
				</div>
			</div>
			<div slot="extra" class="date">
				<Icon type="clock"></Icon>{{new Date().toLocaleDateString()}}
			</div>
			<div class="atricle-content" v-html="article">
				<!--<div data-v-07512350="" class="md"><p>Object.defineProperty是ES5中提出的新方法，作用是为对象新添加一个属性或者修改对象中已经存在的属性</p>
					<h3 id="-">用法</h3>
					<p> Object.defineProperty(obj, prop, descriptor)</p>
					<ul>
						<li>obj：需要定义属性的对象</li>
						<li>prop：需要定义或修改的属性的名称</li>
						<li>descriptor：需要定义或修改的属性的特性
							上面的三个参数都是必需的</li>
					</ul>
					<p>descriptor的值是一个对象，可以有configurable、enumerable、value、writable、get和set，下面来一一介绍：</p>
					<p><strong>configurable</strong></p>
					<p>是否可配置，默认为false，当他的值为false时，起到了下面的作用：</p>
					<ul>
						<li>目标属性不可以使用delete删除</li>
						<li>目标属性不可以再次设置特性（value,writable,configurable,enumerable）</li>
					</ul>
					<pre><code><span class="hljs-comment">//不可以使用delete删除</span>
<span class="hljs-keyword">let</span> yeh = {}
<span class="hljs-built_in">Object</span>.defineProperty(yeh, <span class="hljs-string">'age'</span>, {<span class="hljs-attr">value</span>:<span class="hljs-number">24</span>})
<span class="hljs-keyword">delete</span> yeh.age
<span class="hljs-built_in">console</span>.log(yeh.age) <span class="hljs-comment">//24</span>

<span class="hljs-keyword">let</span> yeh2 = {}
<span class="hljs-built_in">Object</span>.defineProperty(yeh2, <span class="hljs-string">'age'</span>, {<span class="hljs-attr">value</span>:<span class="hljs-number">24</span>,<span class="hljs-attr">configurable</span>:<span class="hljs-literal">true</span>})
<span class="hljs-keyword">delete</span> yeh2.age
<span class="hljs-built_in">console</span>.log(yeh2.age) <span class="hljs-comment">//undefined</span>

<span class="hljs-comment">//不可以重新设置特性</span>
<span class="hljs-built_in">Object</span>.defineProperty(yeh, <span class="hljs-string">'age'</span>, {<span class="hljs-attr">value</span>:<span class="hljs-number">24</span>})
<span class="hljs-built_in">Object</span>.defineProperty(yeh, <span class="hljs-string">'age'</span>, {<span class="hljs-attr">enumerable</span>:<span class="hljs-literal">true</span>})<span class="hljs-comment">//caught TypeError: Cannot redefine property: age</span>
</code></pre><p><strong>enumerable</strong></p>
					<p>是否可枚举，默认为false，此时对象的属性不能在for...in 循环和 Object.keys() 中被枚举</p>
					<pre><code><span class="hljs-keyword">let</span> yeh = {}
<span class="hljs-built_in">Object</span>.defineProperty(yeh, <span class="hljs-string">'age'</span>, {})
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Object</span>.keys(yeh)) <span class="hljs-comment">//[]</span>

<span class="hljs-keyword">let</span> yeh2 = {}
<span class="hljs-built_in">Object</span>.defineProperty(yeh2, <span class="hljs-string">'age'</span>, {
    <span class="hljs-attr">enumerable</span>:<span class="hljs-literal">true</span>
})
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Object</span>.keys(yeh2)) <span class="hljs-comment">//["age"]</span>
</code></pre><p><strong>value</strong></p>
					<p>属性的值，默认为undefined，属性对应的值，可以是任意的值(number, object, function, etc)</p>
					<pre><code> <span class="hljs-keyword">let</span> yeh = {}
<span class="hljs-built_in">Object</span>.defineProperty(yeh, <span class="hljs-string">'age'</span>, {})
<span class="hljs-built_in">console</span>.log(yeh.age) <span class="hljs-comment">//undefined</span>

<span class="hljs-keyword">let</span> yeh2 = {}
<span class="hljs-built_in">Object</span>.defineProperty(yeh2, <span class="hljs-string">'age'</span>, {
    <span class="hljs-attr">value</span>:<span class="hljs-number">24</span>
})
<span class="hljs-built_in">console</span>.log(yeh2.age) <span class="hljs-comment">//24</span>
</code></pre><p><strong>writable</strong></p>
					<p>是否可重新赋值，默认为false，此时为obj的prop重新赋值是无效的</p>
					<pre><code> <span class="hljs-keyword">let</span> yeh = {}
<span class="hljs-built_in">Object</span>.defineProperty(yeh, <span class="hljs-string">'age'</span>, {
    <span class="hljs-attr">value</span>:<span class="hljs-number">24</span>
})
yeh.age = <span class="hljs-number">25</span>
<span class="hljs-built_in">console</span>.log(yeh.age) <span class="hljs-comment">//24</span>

<span class="hljs-keyword">let</span> yeh2 = {}
<span class="hljs-built_in">Object</span>.defineProperty(yeh2, <span class="hljs-string">'age'</span>, {
    <span class="hljs-attr">value</span>:<span class="hljs-number">24</span>,
    <span class="hljs-attr">writable</span>:<span class="hljs-literal">true</span>
})
yeh2.age = <span class="hljs-number">25</span>
<span class="hljs-built_in">console</span>.log(yeh2.age) <span class="hljs-comment">//25</span>
</code></pre><p><strong>get()/set()</strong></p>
					<p>默认值为undefined，当使用了get()或set()方法时，就不能再使用value和writable这两个特性</p>
					<pre><code>let yeh = {}
Object.defineProperty(yeh, 'age', {
    value:<span class="hljs-number">24</span>,
    set(newVal) {}
})
//TypeError: Invalid <span class="hljs-keyword">property</span><span class="hljs-title"> </span>descriptor. Cannot both specify accessors <span class="hljs-keyword">and</span> a value <span class="hljs-keyword">or</span> writable <span class="hljs-keyword">attribute</span>, <span class="hljs-comment">#&lt;Object&gt; at Function.defineProperty (&lt;anonymous&gt;)</span>
</code></pre><p>定义了这两个方法后，当对对象属性进行赋值或取值操作时，会触发相应的get()或set()方法，在Vue.js中，这就是实现数据双向绑定的关键</p>
					<pre><code> <span class="hljs-keyword">var</span> yeh = {}
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">watch</span></span>(obj, key) {
    <span class="hljs-keyword">var</span> temp = {}
    Object.defineProperty(obj, key, {
        enumerable: <span class="hljs-type">true</span>,
        configurable: <span class="hljs-type">true</span>,
        <span class="hljs-keyword">set</span>(<span class="hljs-keyword">new</span><span class="hljs-type">Val</span>) {
            temp = <span class="hljs-keyword">new</span><span class="hljs-type">Val</span>
            console.log(<span class="hljs-string">'执行了set方法，新的值为'</span> + <span class="hljs-keyword">new</span><span class="hljs-type">Val</span>)
        },
        <span class="hljs-keyword">get</span>() {
            console.log(<span class="hljs-string">'执行了get方法'</span>)
            <span class="hljs-keyword">return</span> temp
        }
    })
}
watch(yeh, <span class="hljs-string">"age"</span>)
yeh.age = <span class="hljs-number">25</span> <span class="hljs-comment">//赋值，触发了set方法，打印“执行了set方法，新的值为25”</span>
console.log(yeh.age) <span class="hljs-comment">//取值，触发了get方法，先打印“执行了get方法”，再打印“25”</span>
</code></pre></div>-->
			</div>
		</Card>
	</div>
</template>
<script>
	import {Card, Tag, Icon} from 'iview';
	import ICol from "../../../node_modules/iview/src/components/grid/col.vue";
	import * as axios from "axios";

	export default {
		name: "Article",
		data() {
			return {
				article: "",
				tags: (() => {
					let tags = [];
					for (let i = 1; i < 11; i++) {
						tags.push({id: i, name: "标签" + i});
					}
					return tags;
				})()
			};
		},
		components: {
			ICol,
			Card,
			Icon,
			Tag
		},
		created() {
			axios.get("/api/articles/1").then(result => {
				console.log(result.data);
				this.article = result.data.data;
			});
		}
	};
</script>
<style>
	.article{text-align:left;}
	.article .article-tags{margin-top:10px;}
	.article .atricle-content{width:100%;overflow:hidden;}
	.article .date{margin-top:10px;color:#999;}
	.article .date i{margin-right:6px;}
</style>
