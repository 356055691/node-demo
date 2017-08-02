var express = require('express');
var router = express.Router();

const vue = require('./controllers/index');

router.get('/', function(req, res, next) {
  	res.render('index', {
  		title: 'vueindex',
  		model: 'vue'
  	});
});

router.get('/son', vue.index);

module.exports = router;