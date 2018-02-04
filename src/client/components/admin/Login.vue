<template>
	<Col span="5" class="center relative">
		<Card class="login">
			<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="0">
				<FormItem prop="username">
					<Input v-model="formValidate.username" placeholder="请输入账号"></Input>
				</FormItem>
				<FormItem prop="password">
					<Input v-model="formValidate.password" type="password" placeholder="请输入密码"></Input>
				</FormItem>
				<FormItem>
					<Button type="primary" @click="handleSubmit('formValidate')">登陆</Button>
					<Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
				</FormItem>
			</Form>
			<!--<router-link to="/admin">管理</router-link>-->
		</Card>
	</Col>
</template>

<script>
	import * as axios from "axios";
	import {Card, Input, Form, FormItem} from "iview";
	import {Col} from "../../../../node_modules/iview/src/components/grid";
	export default {
		name: "Login",
		data () {
			return {
				formValidate: {
					username: '',
					password: ''
				},
				ruleValidate: {
					username: [
						{ required: true, message: '账号不能为空', trigger: 'blur' }
					],
					password: [
						{ required: true, message: '密码不能为空', trigger: 'blur' }
					]
				}
			};
		},
		components: {
			Card,
			Col,
			Input,
			Form,
			FormItem,
			Button: resolve => require(['../../../../node_modules/iview/src/components/button/button.vue'], resolve)
		},
		methods: {
			handleSubmit (name) {
				let data = this.$refs[name];
				data.validate((valid) => {
					if (valid) {
						this.login();
					} else {
						this.$Message.error('Fail!');
					}
				});
			},
			handleReset (name) {
				this.$refs[name].resetFields();
			},
			login() {
				axios.post("/api/admin/login", this.formValidate).then(result => {
					let data = result.data;
					if (data.errorCode === 200) {
						this.$router.push("/admin");
					}
				});
			}
		},
		created() {
			axios.get("/api/admin/isLoged").then(result => {
				if (result.data.data.isLoged) this.$router.push("/admin");
			});
		}
	};
</script>

<style>
	.login{
		position:absolute;
		top:50%;
		margin-top:-100px;
		padding:10px 0 0;
		width:inherit;
		height:200px;
	}
</style>
