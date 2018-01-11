/**
 * Created by zxb on 2018/1/11.
 */

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
module.exports = {webpackDev: convert(wdm), webpackHot: convert(webpackHotMiddleware(compiler))};
/* webpack 相关 End */
