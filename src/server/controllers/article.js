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
	async addWordPracticeArticle(ctx, next) {
		await next();
		let params = ctx.request.body;
		let article = {
			classId: 2,
			title: `练字：${dateFormat(new Date(), "yyyy年MM月dd日")}`,
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
function dateFormat(date, format) {
	let o = {
		"M+": date.getMonth() + 1, //month
		"d+": date.getDate(), //day
		"h+": date.getHours(), //hour
		"m+": date.getMinutes(), //minute
		"s+": date.getSeconds(), //second
		"q+": Math.floor((date.getMonth() + 3) / 3), //quarter
		"S": date.getMilliseconds() //millisecond
	}
	if(/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
	}

	for(var k in o) {
		if(new RegExp("("+ k +")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
		}
	}
	return format;
}
module.exports = new ArticleController();
