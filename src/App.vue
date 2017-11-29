<template>
	<div id="app" class="clearfix">
		<blog-nav></blog-nav>
		<router-view/>
	</div>
</template>

<script>
	import BlogNav from "@/components/BlogNav";
	export default {
		name: 'app',
		components: {
			BlogNav
		}
	};
</script>

<style>
	#app {
		width:100%;
		height:100%;
		font-family: Regular 微软雅黑 Microsoft YaHei !important;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	@media (max-width: 1200px) {
		.wrap {
			width:100%;
		}
	}
	@media (min-width: 1200px) {
		.wrap {
			padding:0 10px;
			width:1220px;
		}
		.main.wrap{
			padding:20px 10px;
		}
	}

	.main {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		padding: 20px 0;
		overflow-x: hidden;
	}

	/* 搜索栏 */
	.search-bar {
		float: left;
		margin-bottom: 20px;
		padding: 0 5px;
		width: 20.83333333%;
		height: 30px;
	}

	.search-bar input{
		width:100%;
	}

	.main-pre{
		float:left;
		display: none;
		width:100%;
	}

	@media (max-width: 450px) {
		.search-bar{
			position:fixed;
			top:0;
			margin-bottom:0;
			padding:10px 5px;
			padding-left:15px;
			width:100%;
			height:52px;
			background: #FFF;
		}
		.main-pre{
			display: block;
			padding:12px 0 22px;
		}
		.main {
			margin-bottom: 60px;
		}
		.article,.about{margin:0 10px;}
	}

	@media (max-width: 1000px) {
		.nav-top ul{
			padding:0 10px;
		}

		.main .article-list {
			width: 100%;
		}

		.main a {
			display: block;
			padding: 0 10px;
		}

		.main .cards {
			display: none;
		}
	}

	@media (min-width: 768px){
		.main {
			top: 60px;
		}
	}

	@media (min-width: 768px) and (max-width:1200px) {
		.search-bar{
			position:fixed;
			top:0;
			right:10px;
			padding:14px 0;
			margin-bottom:0;
			max-width:300px;
			height:60px;
			z-index: 101;
		}
	}
</style>
