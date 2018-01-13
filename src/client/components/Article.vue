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
			<div class="atricle-content" v-html="article.content">
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
			axios.get("/api/article/1").then(result => {
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
