<template>
	<blog-nav></blog-nav>
</template>

<script>
	import BlogNav from "@/components/BlogNav";
	export default {
		name: 'Main',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
			};
		},
		components: {
			BlogNav
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
