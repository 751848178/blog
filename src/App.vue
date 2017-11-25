<template>
	<div id="app">
		<blog-nav></blog-nav>
		<img src="./assets/logo.png">
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
</style>
