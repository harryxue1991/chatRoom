var express = require('express');
var User = require('../models/user.js');
var request = require('request');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('register');
});
router.post('/getusername',function(req, res, next) {
    User.getUserByName(req.body.username,function(err,result) {
        if(err) {
            console.log(err)
        }else {
            if(!result) {
                res.send('可以注册')
            }else {
                res.send('用户已被注册')
            }
        }
    })
}) ;
router.post('/', function(req, res, next) {
     var user = new User({
        name: req.body.username,
        password: req.body.password,
        sex: req.body.sex,
        age: req.body.age,
        email: req.body.email
    })
    User.addUser(user,function(err,data) {
        // console.log(data.insertId);
        User.queryUserById(data.insertId,function(err ,sussion) {
            if(err) {
                console.log(err);
            }else {
                // console.log(data);
                req.session.user=sussion[0];
                // console.log(req.session.user)
                res.redirect('/home');
            }
        })
    })
});

module.exports = router;
