var express = require('express');
var request = require('request');
var router = express.Router();

/* GET users listing. */
router.get('/',checkNotLogin);
router.get('/', function(req, res, next) {
	// console.log(req.session.user);
	 var user = req.session.user.USER_NAME;
	 console.log(user);
	  res.render('home',{name:user});
});

function checkNotLogin(req, res, next) {
	//如果已经登录过就不可以在注册，直接跳转到首页
	if (!req.session.user) {
		return res.redirect('/login');
	}
	next();
}

module.exports = router;
