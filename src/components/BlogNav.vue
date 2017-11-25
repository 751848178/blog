<template>
	<div class="blog-navbar">
		<div class="nav-item"></div>
		<div class="nav-item">
			<circle-menu type="middle-around" :number='4' animate="animated jello" mask='white' circle="true" btn>
				<i slot="item_btn"></i>
				<a slot="item_1" class="fa fa-twitter fa-lg"></a>
				<a slot="item_2" class="fa fa-weixin fa-lg"></a>
				<a slot="item_3" class="fa fa-weibo fa-lg"></a>
				<a slot="item_4" class="fa fa-github fa-lg"></a>
			</circle-menu>
		</div>
		<div class="nav-item"></div>
	</div>
</template>

<script>
	import CircleMenu from 'vue-circle-menu';
	export default {
		name: 'BlogNav',
		data () {
			return {};
		},
		components: {
			CircleMenu
		}
	};
</script>

<style>
	.blog-navbar {position: fixed;left: 0;bottom: 0;width:100%;height:60px;display: -webkit-box;display: flex;-webkit-box-flex: 1;background-color: #fff;z-index: 500;}
	.nav-item{position:relative;display:-ms-flexbox;display:flex;flex:1;margin:0 auto;padding:6px;text-align:center;}
	.nav-item:before{content: " ";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #c0bfc4;color: #c0bfc4;transform-origin: 0 0;transform: scaleY(.5);}
	.nav-item img{width:24px;height:24px;}
	.nav-item label{display: inline-block;margin:5px 3px;width:100%;color:#09bb07;}
	#CircleMenu{margin:0 auto;}
	#CircleMenu a{color:#FFF;}
</style>