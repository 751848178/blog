<template>
	<div class="main wrap uplowercase">
		<div class="case-region">
			<Input v-model="oldVal" type="textarea" :autosize="{minRows: 10,maxRows: 10}" placeholder="输入待转内容"></Input>
		</div>
		<div class="case-region case-btns">
			<Button type="primary" @click="toUpperCase">转大写</Button>
			<Button type="primary" @click="toLowerCase">转小写</Button>
		</div>
		<div class="case-region">
			<Input v-model="newVal" type="textarea" :autosize="{minRows: 10,maxRows: 10}" placeholder="转换后的内容"></Input>
		</div>
	</div>
</template>

<script>
	import Button from '../../../../node_modules/iview/src/components/button/button';
	import Input from '../../../../node_modules/iview/src/components/input/input';
	export default {
		name: "Uplowercase",
		data () {
			return {
				oldVal: "",
				newVal: ""
			};
		},
		methods: {
			toUpperCase() {
				this.newVal = this.oldVal.toUpperCase();
			},
			toLowerCase() {
				this.newVal = this.oldVal.toLowerCase();
			}
		},
		components: {
			Button, // : resolve => require(['../../../../node_modules/iview/src/components/button/button.vue'], resolve),
			Input // : resolve => require(['../../../../node_modules/iview/src/components/input/input.vue'], resolve)
		}
	};
</script>

<style>
	.case-region{width:100%;text-align:left;font-size:16px;}
	.case-btns{margin:20px 0;}
	.case-region textarea{width:100%;height:200px;}
	@media (max-width: 1200px) {
		.case-region{
			padding:0 20px;
		}
	}
</style>
