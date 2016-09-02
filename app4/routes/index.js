var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/state', function(req, res, next) {
  res.render('state', { title: 'Ajax [ Ready State ] Sample' });
});
module.exports = router;
