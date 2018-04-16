const fs = require("fs");

class FileController{
	async uploadFile(ctx, next) {
		await next();
		let file = null;
		try {
			file = fs.readFileSync("E:/Workspace/JSProject/blog/static/files/xxrl.zip");
		} catch(err) {
			throw err;
		}
		ctx.body = file;
	}
	async downloadFile(ctx, next) {
		await next();
		let file = null;
		try {
			file = fs.readFileSync("E:/Workspace/JSProject/blog/static/files/xxrl.zip");
		} catch(err) {
			throw err;
		}
		ctx.body = file;
	}
}

module.exports = new FileController();
