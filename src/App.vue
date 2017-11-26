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
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	@media (max-width: 450px) {
		.wrap {
			width:100%;
		}
	}

	@media (min-width: 1200px) {
		.wrap {
			width:1200px;
		}
	}
</style>
