<template>
	<i-col class="cards" span="5">
		<Card class="new-articles">
			<p slot="title">最新发布</p>
			<a href="#" slot="extra" @click.prevent="refresh">
				<Icon type="ios-loop-strong"></Icon>
				刷新
			</a>
			<ul>
				<li v-for="item in randomMovieList">
					<a :href="item.url" target="_blank">{{ item.name }}</a>
				</li>
			</ul>
		</Card>
		<Card class="new-articles">
			<p slot="title">标签</p>
			<ul>
				<Tag v-for="tag in tags" :key="tag.id"><router-link :to="/tag/ + tag.id">{{tag.name}}</router-link></Tag>
			</ul>
		</Card>
	</i-col>
</template>

<script>
	import {Card, Icon, Tag} from 'iview';
	import ICol from "../../node_modules/iview/src/components/grid/col.vue";
	export default {
		name: "Cards",
		data () {
			return {
				movieList: [
					{
						name: 'The Shawshank Redemption',
						url: 'https://movie.douban.com/subject/1292052/',
						rate: 9.6
					},
					{
						name: 'Leon:The Professional',
						url: 'https://movie.douban.com/subject/1295644/',
						rate: 9.4
					},
					{
						name: 'Farewell to My Concubine',
						url: 'https://movie.douban.com/subject/1291546/',
						rate: 9.5
					},
					{
						name: 'Forrest Gump',
						url: 'https://movie.douban.com/subject/1292720/',
						rate: 9.4
					},
					{
						name: 'Life Is Beautiful',
						url: 'https://movie.douban.com/subject/1292063/',
						rate: 9.5
					},
					{
						name: 'Spirited Away',
						url: 'https://movie.douban.com/subject/1291561/',
						rate: 9.2
					},
					{
						name: 'The Legend of 1900',
						url: 'https://movie.douban.com/subject/1292001/',
						rate: 9.2
					},
					{
						name: 'WALL·E',
						url: 'https://movie.douban.com/subject/2131459/',
						rate: 9.3
					},
					{
						name: 'Inception',
						url: 'https://movie.douban.com/subject/3541415/',
						rate: 9.2
					}
				],
				randomMovieList: [],
				tags: (() => {
					let tags = [];
					for (let i = 1; i < 11; i++) {
						tags.push({id: i, name: "标签" + i});
					}
					return tags;
				})()
			};
		},
		methods: {
			refresh () {
				function getArrayItems (arr, num) {
					const tempArray = [];
					for (let index in arr) {
						tempArray.push(arr[index]);
					}
					const returnArray = [];
					for (let i = 0; i<num; i++) {
						if (tempArray.length>0) {
							const arrIndex = Math.floor(Math.random()*tempArray.length);
							returnArray[i] = tempArray[arrIndex];
							tempArray.splice(arrIndex, 1);
						} else {
							break;
						}
					}
					return returnArray;
				}
				this.randomMovieList = getArrayItems(this.movieList, 5);
			}
		},
		mounted () {
			this.refresh();
		},
		components: {
			ICol,
			Card,
			Icon,
			Tag
		}
	};
</script>

<style>

</style>