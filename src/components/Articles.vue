<template>
	<i-col class="article-list" span="19">
		<router-link v-for="item in list" :to="/article/ + item.id" :key="item.id">
			<Card class="article-item">
				<div v-if="item.img" class="article-img" :style="{'background-image':'url(' + item.img + ')'}">

				</div>
				<div>
					<h5>{{item.title}}
						<span class="release-time">{{item.date}}</span>
					</h5>
					<p>是由数银财富金融外包服务(北京)有限公司打造的互联网供应链金融 网络借贷中介服务平台，成立于2017年2月，是一家以信息化技术为核心，以电子商 务、供应链管理和金融服务为依托的高新技术企业。 我们专业服务于能源业、汽车行业、建筑业、零售业和金融业的供应链金。</p>
				</div>
				<div v-if="item.tags.length > 0" class="atricle-tags">
					<router-link v-for="tag in item.tags" :to="/tag/ + tag.id" :key="tag.id">
						<Tag>{{tag.name}}</Tag>
					</router-link>
				</div>
			</Card>
		</router-link>
	</i-col>
</template>

<script>
	import {Card, Tag} from 'iview';
	import ICol from "../../node_modules/iview/src/components/grid/col.vue";
	export default {
		name: 'BArticle',
		props: ["list"],
		data () {
			return {
				tags: (() => {
					let tags = [];
					for (let i = 1; i < 11; i++) {
						tags.push({id: i, name: "标签" + i});
					}
					return tags;
				})()
			};
		},
		components: {
			ICol,
			Card,
			Tag
		}
	};
</script>

<style>
	.article-item{width:100%;margin-bottom:20px;font-size:14px;color:#666666;letter-spacing:0.5px;line-height:26px;text-align:left;}
	.article-item h5{margin:8px 0 3px;height:26px;letter-spacing:0.57px;font-size:16px;color:#333;font-weight:normal;}
	.article-item .release-time{float:right;display:inline-block;width:105px;color:#999;}
	.article-item p{margin-bottom:10px;max-height:56px;overflow: hidden;}
	.article-img{width:100%;height:280px;background-repeat:no-repeat;background-size: cover;}
	.atricle-tags{border-top:1px solid #EEE;width:100%;height:66px;line-height:66px;overflow: hidden;}
</style>