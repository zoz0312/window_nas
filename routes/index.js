var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var dir = './';
  var files = fs.readdirSync(dir); // 디렉토리를 읽어온다
  console.log(files);
  res.render('index', { 
    title: 'Express',
    files
  });
});

module.exports = router;
