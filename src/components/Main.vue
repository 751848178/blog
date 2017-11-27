<template>
	<div class="main wrap">
		<Row :gutter="10">
			<articles :list="articles"></articles>
			<i-col class="cards" span="5">
				<Card>1</Card>
			</i-col>
		</Row>
	</div>
</template>

<script>
	import {Card} from 'iview';
	import ICol from "../../node_modules/iview/src/components/grid/col.vue";
	import Row from "../../node_modules/iview/src/components/grid/row.vue";
	import Articles from "./Articles.vue";
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
			ICol,
			Row,
			Card,
			Articles
		}
	};
</script>

<style>
	.main{position:absolute;top:0;right:0;left:0;padding:20px 0;overflow-x:hidden;}
	@media (max-width: 450px) {
		.main {
			margin-bottom:60px;
		}
	}

	@media (max-width: 1000px) {
		.main .article-list {
			width:100%;
		}
		.main a{
			display: block;
			padding: 0 10px;
		}
		.main .cards{display:none;}
	}

	@media (min-width: 768px) {
		.main {
			top:60px;
		}
	}
</style>
