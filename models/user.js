//user模型
var db = require('./db.js');
function User(user) {
    this.id = user.id;
    this.name = user.name;
    this.password = user.password;
    this.age = user.age;
    this.sex = user.sex;
    this.email = user.email;
}
User.getUserByName = function (username, callback) {
	var selectSql = 'SELECT * FROM user_information WHERE USER_NAME = ?';
	db.query(selectSql, [username], function (err, result) {
		if (err) {
			console.log('getUserbyUsername err:' + err);
			return;
		}
		// console.log('Get name success'+result);
		var data=result[0];
		// console.log(data);
		callback(err, data);
	});
};
User.queryUserList = function (cb) {
    db.query('select * from user_information ', function (err, data) {
        if (err) {
            cb(err);
        }
        else {
            cb(null, data);
        }
    })
}
User.queryUserById = function (id, cb) {
    db.query('SELECT * FROM user_information WHERE USER_ID=?', [id], function (err, data) {
        if (err) {
            cb(err);
        }
        else {
            cb(null, data);
        }
    })
}
User.addUser = function (user, cb) {
    db.query('INSERT INTO user_information VALUES(NULL,?,?,?,?,?)', [user.name, user.password, user.sex, user.age, user.email], function (err, data) {
        if (err) {
            cb(err);
        }
        else {
            cb(null, data);
        }
    })
}
User.updataUser = function (user, cb) {
    db.query("UPDATE user_information SET USER_NAME=?,USER_PASSWORD=?,USER_SEX=?,USER_AGE=?,USER_EMAIL=? WHERE USER_ID=?", [user.name, user.password, user.sex, user.age, user.email, user.id], function (err, data) {
        if (err) {
            console.log(err);
            cb(err);
        }
        else {
            cb(null, data);
        }
    })
}
User.deleteUser = function () { }


module.exports = User