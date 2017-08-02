var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  	res.render('index', {
  		title: 'hbsindex',
  		model: 'hbs'
	});
});

router.get('/son', function(req, res, next) {
  	res.render('index', {
		title: 'hbsson',
		model: 'hbs'
	});
});

module.exports = router;