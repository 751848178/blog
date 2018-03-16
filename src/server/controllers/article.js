const articleService = require("../services/articleService");
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
}

module.exports = new ArticleController();
