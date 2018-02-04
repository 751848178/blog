const router = require('koa-router')()
const userCtrl = require("../controllers/user");

router.prefix('/api/admin')

router.get('/', userCtrl.getAll);

router.post('/login', userCtrl.login);

module.exports = router
