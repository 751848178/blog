import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import About from '@/components/About';
import Article from '@/components/Article';

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
			path: '/article/:id',
			name: 'article',
			component: Article
		},
		{
			path: '/about',
			name: 'about',
			component: About
		}
	]
});
