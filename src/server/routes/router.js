const article = require('./article');
const admin = require('./admin');
const auth = require('./auth');
// const fileHandler = require('./fileHandler');

let router = [article, admin, auth];

module.exports = router;
