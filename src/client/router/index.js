import Vue from 'vue';
import Router from 'vue-router';
import "babel-polyfill";
// eslint-disable-next-line
import {Promise} from "es6-promise-polyfill";
import Main from '@/components/Main';
/* import About from '@/components/About';
import Article from '@/components/Article';
import Uplowercase from '@/components/tools/Uplowercase'; */

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: '/',
			name: 'Main',
			component: Main
		},
		{
			path: '/articles',
			name: 'Articles',
			component: Main
		},
		{
			path: '/tag/:id',
			name: 'Tag',
			component: Main
		},
		{
			path: '/article/:id',
			name: 'Article',
			component: resolve => require(["@/components/Article"], resolve)   // 异步加载组件
		},
		{
			path: '/about',
			name: 'About',
			component: resolve => require(["@/components/About"], resolve)
		},
		{
			path: '/tools/uplowercase',
			name: 'Uplowercase',
			component: resolve => require(["@/components/tools/Uplowercase"], resolve)
		}
	]
});
