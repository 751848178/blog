const db = require("../commons/DBHelper");

class ArticleService{
	async getArticleById(id) {
		return await db.execQuery({
			sql: `select id,class_id clalssId,title,read_count readCount,create_time createTime,tags,content,auther from article where id = ${id}`
		});
	}
}

module.exports = new ArticleService();
