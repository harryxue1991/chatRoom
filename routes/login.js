var express = require('express');
var request = require('request');
var User = require('../models/user.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login');
});

router.post('/', function(req,res) {
    if(req.body) {
        User.getUserByName(req.body.name,function(err,result) {
            if(err) {
                console.log(err)
            }else {
                if(!result) {
                    res.send('找不到用户名');
                }else {
                    // console.log(result)
                    if(result.USER_PASSWORD == req.body.pass) {
                        req.session.user = result;
                         res.send('登入成功');
                        //  res.redirect('/home');
                    }else{
                        res.send('密码错误');
                    }
                }
            }
        })
    }
})


module.exports = router;
