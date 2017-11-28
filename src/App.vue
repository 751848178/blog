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
			width:1200px;
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

	@media (max-width: 450px) {
		.main {
			margin-bottom: 60px;
		}
	}

	@media (max-width: 1000px) {
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

	@media (min-width: 768px) {
		.main {
			top: 60px;
		}
	}
</style>
