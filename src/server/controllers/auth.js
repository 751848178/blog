const qiniu = require("../qiniu");

class AuthController{
	async getQiniuUpToken(ctx, next) {
		await next();
		var mac = new qiniu.auth.digest.Mac(qiniu.conf.ACCESS_KEY, qiniu.conf.SECRET_KEY)
		var bucket = "blog";
		var putPolicy = new qiniu.rs.PutPolicy({
			scope: bucket
		});
		var uploadToken = putPolicy.uploadToken(mac);
		ctx.body = {
			uptoken: uploadToken
		};
	}
}

module.exports = new AuthController();

