<template>
	<div class="main wrap uplowercase">
		<div class="case-region">
			<textarea v-model="oldVal"></textarea>
		</div>
		<div class="case-region case-btns">
			<ButtonGroup>
				<Button type="primary" @click="toUpperCase">转大写</Button>
				<Button type="primary" @click="toLowerCase">转小写</Button>
			</ButtonGroup>
		</div>
		<div class="case-region">
			<textarea v-model="newVal"></textarea>
		</div>
	</div>
</template>

<script>
	import {Button} from "iview";
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
			Button,
			ButtonGroup: Button.Group
		}
	};
</script>

<style>
	.case-region{width:100%;text-align:left;font-size:16px;}
	.case-btns{margin:15px 0 20px;}
	.case-region textarea{width:100%;height:200px;}
	@media (max-width: 1200px) {
		.case-region{
			padding:0 20px;
		}
	}
</style>