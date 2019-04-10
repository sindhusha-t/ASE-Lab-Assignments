var express = require('express');
var router = express.Router();
var login = require('../controller/authenticate/login');

/* GET users listing. */
router.post('/login', function (req, res, next) {

    const username = req.body.username;
    const email = req.body.email;
    let loginu = login(username, email, req.body.password);

    if (loginu) {
        res.cookie("UserData", loginu);
        const userData = req.cookies["UserData"];
        res.render('users', {username: userData.name, email: userData.email, gender: userData.gender, occupation: userData.occupation});
    }
    else {
        res.render('index', {error: true});
    }
});


module.exports = router;
