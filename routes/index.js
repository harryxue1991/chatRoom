var express = require('express');
var User = require('../models/user.js');
var request = require('request');
var router = express.Router();

// var bodyParser = require('body-parser');
// router.use(bodyParser.json());

            // res.send(req.headers['user-agent']);


router.get('/page/:id', function (req, res) {
    User.queryUserById(req.params.id, function (err, data) {
        if (err) {
            res.send('查询报错了');
        }
            res.send(data);
    })
});
// function checkLogin(req, res, next) {
// 	if (req.session.user) {
// 		return res.redirect('/home');
// 	}
// 	next();
// }
router.get('/', checkNotLogin);
router.get('/', function (require, response, next) {
    User.queryUserList(function (err, data) {
        if (err) {
            response.send('查询报错了');
        }

        response.render('index');
    })
})

router.post('/', function (req, res) {
    var user = new User({
        name: req.body.name,
        password: req.body.password,
        sex: req.body.sex,
        age: req.body.age,
        email: req.body.email
    })
    User.addUser(user, function (err, data) {
        if (err) {
            res.send('新增user失败');
        }
        else {
            res.send('新增user成功');
        }
    })
});

router.put('/:id', function (req, res) {
    //根据id去查数据库
    User.queryUserById(req.params.id, function (err, data) {
        if (err) {
            res.send('查询报错了');
        }
        var user = new User({
            id: data[0].USER_ID,
            name: data[0].USER_NAME,
            password: data[0].USER_PASSWORD,
            sex: data[0].USER_SEX,
            age: data[0].USER_AGE,
            email: data[0].USER_EMAIL
        })
        if (req.body.name) {
            user.name = req.body.name;
        }
        if (req.body.password) {
            console.log(123);
            user.password = req.body.password;
        }
         if (req.body.sex) {
            console.log(123);
            user.sex = req.body.sex;
        }
         if (req.body.age) {
            console.log(123);
            user.age = req.body.age;
        }
        if (req.body.email) {
            console.log(123);
            user.email = req.body.email;
        }
        User.updataUser(user, function (err, data) {
            if (err) {
                res.send('修改user列表失败');
            }
            else {
                res.send(data);
            }
        })
    })
});

router.post('/value', function (require, response, next) {
    console.log(require.body)
    response.send("返回结果")
})
router.get("/logout",function(req,res) {
	console.dir(req.session.user);
	req.session.user=null;
	res.redirect('/');
});


function checkLogin(req, res, next) {
	if (!req.session.user) {
		return res.redirect('/');
	}
	next();
}
function checkNotLogin(req, res, next) {
	//如果已经登录过就不可以在注册，直接跳转到首页
	if (req.session.user) {
		return res.redirect('/home');
	}
	next();
}


module.exports = router;
