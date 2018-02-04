const db = require("../commons/DBHelper");
const crypto = require('crypto');

class UserService{
	async getUserById(id) {
		return this.getUserByCondition({id})
		// return await db.queryById(`select id, username, password, last_login lastLogin from user where id = ?`, id);
	}

	async getAllUsers() {
		return await db.query(`select id, username, password, last_login lastLogin from user`);
	}

	async login(username, password) {
		let md5 = crypto.createHash('md5');
		let result = await this.getUserByCondition({username, password: md5.update(password).digest("hex")});
		return result.length > 0;
	}

	async getUserByCondition(params) {
		let condition = " where ", flag = false, data = [];
		for(let key in params){
			flag = true;
			condition += key + " = ? AND ";
			data.push(params[key]);
		}
		condition = condition.substr(0, condition.length - 5);
		return await db.query(`select id, username, password, last_login lastLogin from user${ flag ? condition : "" }`, data);
	}
}

module.exports = new UserService();
