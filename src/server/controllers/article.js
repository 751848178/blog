const articleService = require("../services/articleService");

class ArticleController{
	async getArticleById(ctx, next) {
		let article = await articleService.getArticleById(1);
		ctx.body = {
			data: article,
			errorCode: 200,
			errorMessage: ""
		};
	}
}

module.exports = new ArticleController();
