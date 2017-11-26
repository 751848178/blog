<template>
	<div class="main wrap">
		<Row v-for="i in 20" :gutter="10">
			<i-col span="20">
				<Card>123456789</Card>
			</i-col>
			<i-col span="4">
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
	.main{position:absolute;top:0;right:0;left:0;overflow-x:hidden;}
	@media (max-width: 450px) {
		.main {
			margin-bottom:60px;
		}
	}

	@media (min-width: 768px) {
		.main {
			top:60px;
		}
	}
</style>
