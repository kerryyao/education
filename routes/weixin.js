var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/*', function(req, res, next) {
  console.log(req.path);
  res.render('weixin'+req.path);
});

module.exports = router;