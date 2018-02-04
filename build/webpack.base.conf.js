'use strict'
const webpack = require('webpack');
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

let addPlugins = process.env.NODE_ENV === 'production' ? [] : [new HtmlWebpackPlugin({
	filename: 'index.html',
	template: 'index.html',
	inject: true
})]

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: {
		'index': [
			'eventsource-polyfill',
			'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
			// './bin/www',
			'./src/client/main.js'
		]
		// app: './src/client/main.js'
	},
	output: {
		/*path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: process.env.NODE_ENV === 'production'
			? config.build.assetsPublicPath
			: config.dev.assetsPublicPath*/
		path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: process.env.NODE_ENV === 'production'
			? config.build.assetsPublicPath
			: config.dev.assetsPublicPath,// 'http://localhost:3000/build/',
		// webpack-dev-server伺服的文件是相对publicPath这个路径的
		chunkFilename: '[name].chunk.js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('src/client'),
		}
	},
	module: {
		rules: [
			...(config.dev.useEslint ? [{
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				include: [resolve('src'), resolve('test')],
				options: {
					formatter: require('eslint-friendly-formatter'),
					emitWarning: !config.dev.showEslintErrorsInOverlay
				}
			}] : []),
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader',
						options: vueLoaderConfig
					},
					{
						loader: 'iview-loader',
						options: {
							prefix: false
						}
					}
				]
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('src'), resolve('test'), resolve('/node_modules/iview/src'), resolve('/node_modules/iview/packages')]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('media/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			}
		]
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		// “If you are using the CLI, the webpack process will not exit with an error code by enabling this plugin.”
		// https://github.com/webpack/docs/wiki/list-of-plugins#noerrorsplugin
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		}),

		// copy custom static assets
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, '../static'),
				to: config.build.assetsSubDirectory,
				ignore: ['.*']
			}
		]),
		...addPlugins
	],
	externals: {
		iview: 'iview'
	}
}
