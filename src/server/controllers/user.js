const userService = require("../services/userService");
const fs = require("fs");
const jwt = require('jsonwebtoken')


class UserController{
	async getUserById(ctx, next) {
		let user = await userService.getUserById(ctx.params.id);
		ctx.body = {
			data: user,
			errorCode: 200,
			errorMessage: ""
		};
	}
	async getAll(ctx, next) {
		let userList = await userService.getAllUsers();
		ctx.body = {
			data: userList,
			errorCode: 200,
			errorMessage: ""
		};
	}
	async login(ctx, next) {
		let params = ctx.request.body;
		let loginInfo = await userService.login(params.username, params.password);
		let resBody = {
			data: "",
			errorCode: 200,
			errorMessage: ""
		};
		if(loginInfo) {
			resBody.data = "登陆成功";
			ctx.cookies.set("token", jwt.sign({username: params.userName}, "jwt", {
				expiresIn: 60 * 60 * 24  // 24小时过期
			}));
		}else {
			resBody.errorMessage = "用户名或密码错误";
			resBody.errorCode = 204;
		}
		ctx.body = resBody;
	}
}

module.exports = new UserController();
