const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const path = require('path')

/* webpack 相关 Start */
const webpack = require('webpack');
const convert = require('koa-convert')
const koaWebpackMiddleware = require('koa-webpack-middleware');
const webpackDevMiddleware = koaWebpackMiddleware.devMiddleware;
const webpackHotMiddleware = koaWebpackMiddleware.hotMiddleware;
const config = require('../../build/webpack.base.conf')
const compiler = webpack(config)

const wdm = webpackDevMiddleware(compiler, {
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  reload: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
})
app.use(convert(wdm))
app.use(convert(webpackHotMiddleware(compiler)))
/* webpack 相关 End */


/*const index = require('./routes/index')
const users = require('./routes/users')*/
const articles = require('./routes/articles')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
let rootPath = path.resolve(__dirname, "../../");
app.use(require('koa-static')(rootPath + '/static'))

/*app.use(views(__dirname + '/views', {
  extension: 'html'
}))*/

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
/*app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())*/
app.use(articles.routes(), articles.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
