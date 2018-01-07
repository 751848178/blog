<template>
	<div class="main wrap">
		<i-col span="24">
			<Card class="about">
				<h1 class="title">关于这个网站</h1>
				<p class="about-me">大家好，我是兴勃，一位前端Coder，为了不落伍，目前正在学习Vue.js和ES6，有时也会使用node.js，不过属于初学性质！</p>
				<p class="about-blog">
					这个网站算是我的学习成果吧，使用的技术栈：Vue.js+ES6+Webpack+Mysql+node.js+Express.js，我已将网站开源到GitHub，项目地址
					<a target="_blank" href="https://github.com/751848178/blog">https://github.com/751848178/blog</a>
					。由于我技术水平的限制，目前应该还有许多不足，如果你有什么好的建议和意见，欢迎和我联系！
				</p>
				<p class="about-email">
					Email：
					<a href="mailto:13994556930@163.com">13994556930@163.com</a>
				</p>
				<p class="about-github">
					Github：
					<a target="_blank" href="https://github.com/751848178">https://github.com/751848178</a>
				</p>
			</Card>
		</i-col>
	</div>
</template>

<script>
	import {Card} from 'iview';
	import ICol from "../../../node_modules/iview/src/components/grid/col.vue";
	export default {
		name: "About",
		data () {
			return {};
		},
		components: {
			ICol,
			Card
		}
	};
</script>

<style>
	.about{text-align:left;font-size: 16px;}
	.about .title{text-align: center;}
	.about-me,.about-blog,.about-email,.about-github{padding-top: 20px;line-height: 26px;text-indent: 2em;}
</style>