const db = require("../commons/DBHelper");

class ArticleService{
	// 根据ID获取文章内容
	async getArticleById(id) {
		return await db.queryById(`select id,class_id clalssId,title,read_count readCount,create_time createTime,tags,content,auther from article where id = ?`, id);
	}
	//
	async addArticle(article) {
		return await db.insert(`INSERT INTO article(class_id, title, read_count, create_time, tags, content, auther) VALUES (?, ?, ?, NOW(), ?, ?, ?)`, [article.classId, article.title, article.readCount, article.tags, article.content, article.auther]);
	}
}

module.exports = new ArticleService();
