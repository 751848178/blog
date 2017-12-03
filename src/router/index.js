import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import About from '@/components/About';
import Article from '@/components/Article';
import Uplowercase from '@/components/tools/Uplowercase';

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
			component: Article
		},
		{
			path: '/about',
			name: 'About',
			component: About
		},
		{
			path: '/tools/uplowercase',
			name: 'Uplowercase',
			component: Uplowercase
		}
	]
});
