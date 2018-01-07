const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/bar/:id', function (ctx, next) {
  ctx.body = `this is a users/bar/:id response params:${JSON.stringify(ctx.params)}`
})

module.exports = router
