<template>
	<div class="layout">
		<Layout>
			<Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
				<Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
					<MenuItem name="1-1">
						<Icon type="ios-navigate"></Icon>
						<router-link to="/admin/setting">网站设置</router-link>
					</MenuItem>
					<MenuItem name="1-2">
						<Icon type="search"></Icon>
						<router-link to="/admin/article">文章管理</router-link>
					</MenuItem>
					<MenuItem name="1-3">
						<Icon type="settings"></Icon>
						<span>Option 3</span>
					</MenuItem>
				</Menu>
			</Sider>
			<Layout>
				<Header :style="{padding: 0}" class="layout-header-bar text-l">
					<Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
				</Header>
				<Content :style="{margin: '20px', background: '#fff', minHeight: 'calc(100vh - 106px)'}">
					<router-view/>
				</Content>
			</Layout>
		</Layout>
	</div>
</template>

<script>
	import Layout from "../../../../node_modules/iview/src/components/layout/layout";
	import Sider from "../../../../node_modules/iview/src/components/layout/sider";
	import Menu from "../../../../node_modules/iview/src/components/menu/menu";
	import MenuItem from "../../../../node_modules/iview/src/components/menu/menu-item";
	import Icon from "../../../../node_modules/iview/src/components/icon/icon";
	import Header from "../../../../node_modules/iview/src/components/layout/header";
	import Content from "../../../../node_modules/iview/src/components/layout/content";
    export default {
        name: "_layout",
		data () {
			return {
				isCollapsed: false
			};
		},
		computed: {
			rotateIcon () {
				return [
					'menu-icon',
					this.isCollapsed ? 'rotate-icon' : ''
				];
			},
			menuitemClasses () {
				return [
					'menu-item',
					this.isCollapsed ? 'collapsed-menu' : ''
				];
			}
		},
		methods: {
			collapsedSider () {
				this.$refs.side1.toggleCollapse();
			}
		},
		components: {
			Layout, // : resolve => require(["../../../../node_modules/iview/src/components/layout/layout"], resolve),
			Sider, // : resolve => require(["../../../../node_modules/iview/src/components/layout/sider"], resolve),
			Menu, // : resolve => require(["../../../../node_modules/iview/src/components/menu/menu"], resolve),
			MenuItem, // : resolve => require(["../../../../node_modules/iview/src/components/menu/menu-item"], resolve),
			Icon, // : resolve => require(["../../../../node_modules/iview/src/components/icon/icon"], resolve),
			Header, // : resolve => require(["../../../../node_modules/iview/src/components/layout/header"], resolve),
			Content // : resolve => require(["../../../../node_modules/iview/src/components/layout/content"], resolve)
		}
    };
</script>

<style>
	.layout{
		border: 1px solid #d7dde4;
		background: #f5f7f9;
		position: relative;
		border-radius: 4px;
		overflow: hidden;
	}
	.layout-header-bar{
		background: #fff;
		box-shadow: 0 1px 1px rgba(0,0,0,.1);
	}
	.layout-logo-left{
		width: 90%;
		height: 30px;
		background: #5b6270;
		border-radius: 3px;
		margin: 15px auto;
	}
	.menu-icon{
		transition: all .3s;
	}
	.rotate-icon{
		transform: rotate(-90deg);
	}
	.menu-item span{
		display: inline-block;
		overflow: hidden;
		width: 69px;
		text-overflow: ellipsis;
		white-space: nowrap;
		vertical-align: bottom;
		transition: width .2s ease .2s;
	}
	.menu-item i{
		transform: translateX(0px);
		transition: font-size .2s ease, transform .2s ease;
		vertical-align: middle;
		font-size: 16px;
	}
	.collapsed-menu span{
		width: 0px;
		transition: width .2s ease;
	}
	.collapsed-menu i{
		transform: translateX(5px);
		transition: font-size .2s ease .2s, transform .2s ease .2s;
		vertical-align: middle;
		font-size: 22px;
	}
</style>
