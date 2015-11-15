var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/message',function(req, res, next){
	var nicename=req.body.nicename;
	var email=req.body.email;
	var title=req.body.title;
	var content=req.body.content;

	console.log(nicename+email+title+content);
	res.send("hello");
});

module.exports = router;
