<template>
	<div class="blog-navbar">
		<div class="nav-top">
			<Menu mode="horizontal" theme="light" active-name="1">
				<MenuItem name="1">
					<Icon type="ios-paper"></Icon>
					内容管理
				</MenuItem>
				<MenuItem name="2">
					<Icon type="ios-people"></Icon>
					用户管理
				</MenuItem>
				<Submenu name="3">
					<template slot="title">
						<Icon type="stats-bars"></Icon>
						统计分析
					</template>
					<MenuGroup title="使用">
						<MenuItem name="3-1">新增和启动</MenuItem>
						<MenuItem name="3-2">活跃分析</MenuItem>
						<MenuItem name="3-3">时段分析</MenuItem>
					</MenuGroup>
					<MenuGroup title="留存">
						<MenuItem name="3-4">用户留存</MenuItem>
						<MenuItem name="3-5">流失用户</MenuItem>
					</MenuGroup>
				</Submenu>
				<MenuItem name="4">
					<Icon type="settings"></Icon>
					综合设置
				</MenuItem>
			</Menu>
		</div>
		<div class="nav-bottom">
			<div class="nav-item">
				<router-link to="/foo">
					<img src="http://cn.vuejs.org/images/logo.png">
					<label>文章列表</label>
				</router-link>
			</div>
			<div class="nav-item">
				<circle-menu type="middle-around" :number='4' animate="animated jello" mask='white' :circle="true" btn>
					<i slot="item_btn"></i>
					<router-link to="/foo1" slot="item_1" class="fa fa-twitter fa-lg"></router-link>
					<router-link to="/foo2" slot="item_2" class="fa fa-weixin fa-lg"></router-link>
					<router-link to="/foo3" slot="item_3" class="fa fa-weibo fa-lg"></router-link>
					<router-link to="/foo4" slot="item_4" class="fa fa-github fa-lg"></router-link>
				</circle-menu>
			</div>
			<div class="nav-item">
				<router-link to="/foo">
					<img src="http://cn.vuejs.org/images/logo.png">
					<label>我的</label>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import CircleMenu from "vue-circle-menu";
	import {Menu, Icon} from "iview";
	export default {
		name: 'BlogNav',
		data () {
			return {};
		},
		components: {
			CircleMenu,
			Menu,
			Icon,
			MenuItem: Menu.Item,
			MenuGroup: Menu.Group,
			Submenu: Menu.Sub
		}
	};
</script>

<style>
	.blog-navbar{width:100%;}
	.nav-top{width:100%;}
	.nav-bottom{width:100%;height:60px;display: -webkit-box;display: flex;-webkit-box-flex: 1;background-color: #fff;z-index: 500;}
	.nav-item{position:relative;display:-ms-flexbox;display:flex;flex:1;margin:0 auto;padding:6px 0;text-align:center;}
	.nav-item:before{content: " ";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #c0bfc4;color: #c0bfc4;transform-origin: 0 0;transform: scaleY(.5);}
	.nav-item a{display:inline-block;width:100%;}
	.nav-item img{width:24px;height:24px;}
	.nav-item label{display: inline-block;margin:5px 3px;width:100%;color:#09bb07;}
	#CircleMenu{margin:0 auto;}
	#CircleMenu a{color:#FFF;}
	@media (max-width:450px) {
		.blog-navbar{position: fixed;left: 0;bottom: 0;height:60px;}
		.nav-top{display:none;}
		.nav-bottom{display:-ms-flexbox;display:flex;}
	}
	@media (min-width:768px) {
		.nav-top{display:block;}
		.nav-bottom{display:none;}
	}
</style>