const router = require('koa-router')();
const auth = require("../controllers/auth");

router.prefix('/api');

router.get('/auth/getQiniuUpToken', auth.getQiniuUpToken);

module.exports = router;
