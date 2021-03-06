const router = require('koa-router')();
const articleCtrl = require("../controllers/article");

router.prefix('/api');

router.get('/article', function (ctx, next) {
	ctx.body = 'this is a users response!'
});

router.get('/article/:id', articleCtrl.getArticleById);

router.post('/article/addWordPract', articleCtrl.addWordPracticeArticle);

module.exports = router;
