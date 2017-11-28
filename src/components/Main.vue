<template>
	<div class="main wrap">
		<Row :gutter="10">
			<articles :list="articles"></articles>
			<div class="search-bar">
				<Input icon="android-search" placeholder="不要忘记按回车哦~" style="width:100%;"></Input>
			</div>
			<cards></cards>
		</Row>
	</div>
</template>

<script>
	import {Input} from 'iview';
	import Row from "../../node_modules/iview/src/components/grid/row.vue";
	import Articles from "@/components/Articles.vue";
	import Cards from "@/components/Cards.vue";
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
			Row,
			Articles,
			Input,
			Cards
		}
	};
</script>

<style>

	.search-bar {
		float: left;
		margin-bottom: 20px;
		padding: 0 5px;
		width: 20.83333333%;
		height: 30px;
	}

	.new-articles{
		margin-bottom:20px;
		text-align:left;
	}
</style>
