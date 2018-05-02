const articleService = require("../services/articleService");
const Utils = require("../commons/Utils");
const fs = require("fs");

class ArticleController{
	async getArticleById(ctx, next) {
		await next();
		let article = await articleService.getArticleById(1);
		ctx.body = {
			data: article,
			errorCode: 200,
			errorMessage: ""
		};
	}
	async addWordPracticeArticle(ctx, next) {
		await next();
		let params = ctx.request.body;
		let article = {
			classId: 2,
			title: `练字：${Utils.dateFormat(new Date(), "yyyy年MM月dd日")}`,
			readCount: 0,
			tags: "1",
			content: params.article,
			auther: "兴勃"
		};
		let row = await articleService.addArticle(article);
		let resBody = {
			data: "",
			errorCode: 200,
			errorMessage: ""
		};
		console.log(row);
		if(row.affectedRows > 0) {
			resBody.data = "添加成功";
		}else {
			resBody.errorMessage = "添加失败";
			resBody.errorCode = 204;
		}
		ctx.body = resBody;
	}
}
module.exports = new ArticleController();
