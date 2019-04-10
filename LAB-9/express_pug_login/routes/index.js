var express = require('express');
var cookieparser = require('cookie-parser');
var router = express.Router();

router.use(cookieparser());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
