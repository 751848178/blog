<template>
	<div class="blog-navbar">
		<div class="nav-top">
			<Menu mode="horizontal" theme="light" :active-name="$route.path">
				<div class="wrap nav-links">
					<MenuItem name="/" style="border-bottom:none;">
						<router-link to="/" class="logo"></router-link>
					</MenuItem>
					<MenuItem name="/">
						<router-link to="/">首页</router-link>
					</MenuItem>
					<MenuItem name="/about">
						<router-link to="/about">关于</router-link>
					</MenuItem>
					<MenuItem name="/tools/uplowercase">
						<router-link to="/tools/uplowercase">工具</router-link>
					</MenuItem>
					<MenuItem name="/manage/login">
						<router-link to="/manage/login">管理</router-link>
					</MenuItem>
				</div>
			</Menu>
		</div>
		<div class="nav-bottom">
			<div class="nav-item">
				<router-link to="/">
					<img src="/static/images/logo.png">
					<label>首页</label>
				</router-link>
			</div>
			<div class="nav-item">
				<circle-menu type="middle-around" :number='4' animate="animated jello" mask='white' :circle="true" v-routeChange="$route.path" btn>
					<i slot="item_btn"></i>
					<router-link to="/foo1" slot="item_1" class="fa fa-twitter fa-lg"></router-link>
					<router-link to="/tools/uplowercase" slot="item_2" class="fa fa-gears fa-lg"></router-link>
					<router-link to="/foo3" slot="item_3" class="fa fa-weibo fa-lg"></router-link>
					<router-link to="/foo4" slot="item_4" class="fa fa-github fa-lg"></router-link>
				</circle-menu>
			</div>
			<div class="nav-item">
				<router-link to="/foo">
					<img src="/static/images/logo.png">
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
		methods: {},
		directives: {
			routeChange: {
				update: function (el, val) {
					if (el.getElementsByClassName("oy-menu-group")[0].classList.contains("open")) {
						if (val.value === "/tools/uplowercase" || val.value === "/foo1" || val.value === "/foo3" || val.value === "/foo4") {
							el.getElementsByClassName("oy-menu-btn")[0].click();
							el.getElementsByClassName("oy-menu-group")[0].classList.remove("open");
							el.getElementsByClassName("oy-mask-white")[0].style.display = "none";
						}
					}
				}
			}
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
	.logo{width:200px;height:60px;background:url(/static/images/logo.png) center -1px no-repeat;}
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu{
		height:60px;
	}
	.blog-navbar {
		position:fixed;
		left:0;
		width: 100%;
		height:60px;
		z-index:100;
	}

	.nav-links a{margin-left:-20px;margin-right:-20px;padding:0 20px;float:left;display:inline-block;}

	.nav-top {
		width: 100%;
	}

	.nav-bottom {
		width: 100%;
		height: 60px;
		display: -webkit-box;
		display: flex;
		-webkit-box-flex: 1;
		background-color: #fff;
		z-index: 500;
	}

	.nav-item {
		position: relative;
		display: -ms-flexbox;
		display: flex;
		flex: 1;
		margin: 0;
		padding: 6px 0;
		text-align: center;
	}

	.nav-item:before {
		content: " ";
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		height: 1px;
		border-top: 1px solid #c0bfc4;
		color: #c0bfc4;
		transform-origin: 0 0;
		transform: scaleY(.5);
	}

	.nav-item a {
		display: inline-block;
		width: 100%;
	}

	.nav-item img {
		margin-left:10px;
		width: 24px;
		height: 24px;
	}

	.nav-item label {
		display: inline-block;
		margin: 5px 3px;
		width: 100%;
		color: #09bb07;
	}

	#CircleMenu {
		margin: 0 auto;
	}

	#CircleMenu a {
		color: #FFF;
	}

	@media (max-width: 450px) {
		.blog-navbar {
			bottom: 0;
		}

		.nav-top {
			display: none;
		}

		.nav-bottom {
			display: -ms-flexbox;
			display: flex;
		}
	}

	@media (min-width: 768px) {
		.blog-navbar {
			top: 0;
		}

		.nav-top {
			display: block;
		}

		.nav-bottom {
			display: none;
		}
	}
</style>
