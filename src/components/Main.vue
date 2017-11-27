<template>
	<div class="main wrap">
		<Row :gutter="10">
			<i-col class="article-list" span="19">
				<router-link v-for="i in 10" :to="'/article/' + i" :key="i">
					<Card style="height:100px;" class="article-item">
						<h5>外包服务(北京)有限公司打造的互联网
							<span>2017-10-20</span>
						</h5>
						<p>是由数银财富金融外包服务(北京)有限公司打造的互联网供应链金融 网络借贷中介服务平台，成立于2017年2月，是一家以信息化技术为核心，以电子商 务、供应链管理和金融服务为依托的高新技术企业。 我们专业服务于能源业、汽车行业、建筑业、零售业和金融业的供应链金。</p>
					</Card>
				</router-link>
			</i-col>
			<i-col class="cards" span="5">
				<Card>1</Card>
			</i-col>
		</Row>
	</div>
</template>

<script>
	import {Card} from 'iview';
	import ICol from "../../node_modules/iview/src/components/grid/col.vue";
	import Row from "../../node_modules/iview/src/components/grid/row.vue";
	export default {
		name: 'Main',
		data () {
			return {
			};
		},
		components: {
			ICol,
			Row,
			Card
		}
	};
</script>

<style>
	.main{position:absolute;top:0;right:0;left:0;padding:20px 0;overflow-x:hidden;}
	.article-item{width:100%;margin-bottom:10px;font-size:14px;color:#666666;letter-spacing:0.5px;line-height:26px;text-align:left;}
	.article-item h5{margin:5px 0 10px;letter-spacing:0.57px;font-size:16px;color:#333;font-weight:normal;}
	.article-item span{float:right;display:inline-block;width:105px;color:#999;}
	.article-item p{height:30px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
	@media (max-width: 450px) {
		.main {
			margin-bottom:60px;
		}
	}

	@media (max-width: 1000px) {
		.main .article-list {
			width:100%;
		}
		.main .cards{display:none;}
	}

	@media (min-width: 768px) {
		.main {
			top:60px;
		}
	}
</style>
