<template>
	<div class="main wrap">
		<Row :gutter="10">
			<div class="main-pre"></div>
			<articles :list="articles"></articles>
			<div class="search-bar">
				<Input icon="android-search" type="text" placeholder="不要忘记按回车哦~"></Input>
			</div>
			<cards></cards>
		</Row>
	</div>
</template>

<script>
	import CmptFacroty from '../utils/CmptFactory';
	export default {
		name: 'Main',
		data () {
			return {
				articles: (() => {
					let articles = [];
					for (let j = 1; j < 11; j++) {
						let r = Math.ceil(Math.random() * 10);
						articles.push({
							id: r,
							title: "标题 热度：" + r,
							desc: (() => {
								let desc = "这里是描述啊~~";
								for (let i; i < r; i++) {
									desc += desc;
								}
								return desc;
							})(),
							img: (r % 2 === 0 ? "http://justyeh.com/blogs/javascript-banner.jpg" : ""),
							date: new Date().toLocaleDateString(),
							tags: (() => {
								let tags = [];
								for (let i = 1; i < r; i++) {
									tags.push({id: i, name: "标签" + i});
								}
								return tags;
							})()
						});
					}
					return articles;
				})()
			};
		},
		components: {
			/* ...CmptFacroty.getCmpt(["Row", "Articles", "Input", "Cards"]) */
			Row: resolve => require(['../../../node_modules/iview/src/components/grid/row.vue'], resolve),
			Articles: resolve => require(["@/components/Articles"], resolve),
			Input: resolve => require(['../../../node_modules/iview/src/components/input/input.vue'], resolve),
			Cards: resolve => require(["@/components/Cards"], resolve)
		},
		beforeCreate() {
			console.log(CmptFacroty);
			console.log(CmptFacroty.getCmpt(["Row", "Articles", "Input", "Cards"]));
		}
	};
</script>

<style>
	.search-bar{

	}
	.new-articles{
		margin-bottom:20px;
		text-align:left;
	}
</style>
