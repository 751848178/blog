const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const path = require('path')
const jwt = require('jsonwebtoken')

if (process.argv.join("").split("--").indexOf("dev") != -1) {
	const dev = require('./dev')
	console.log("==========================================================================================");
	app.use(dev.webpackDev);
	app.use(dev.webpackHot);
	let rootPath = path.resolve(__dirname, "../../");
	app.use(require('koa-static')(rootPath + '/static'))
}

app.use(async(ctx, next) => {
	if(ctx.path.indexOf("/api/admin") == -1) {
		await next();
		return;
	}
	let key="jwt"; // 加密密钥
	let body = {
		data: "操作成功",
		errorCode: 200,
		errorMessage: ""
	};
	let flag = await new Promise((resolve, reject) => {
		let token = ctx.cookies.get("token");
		if(!token){
			resolve(false);
		}else {
			jwt.verify(token, key, (err, decode) => {
				resolve(!err);
			});
		}
	});
	if(flag && ctx.path == "/api/admin/isLoged") ctx.body = {
		data: {isLoged : true},
		errorCode: 200,
		errorMessage: ""
	};
	else if(flag || ctx.path == "/api/admin/login") await next();
	else ctx.body = {
		data: "",
		errorCode: 204,
		errorMessage: "请登陆后操作"
	};
})

const routers = require('./routes/router')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
	enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

// logger
app.use(async(ctx, next) => {
	const start = new Date()
	await next()
	const ms = new Date() - start
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});

// routes
routers.forEach(router => {
	app.use(router.routes(), router.allowedMethods())
});

// error-handling
app.on('error', (err, ctx) => {
	console.error('server error', err, ctx)
});

module.exports = app
