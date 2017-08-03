var express = require('express');
var router = express.Router();

const run = require('./controllers/run');

router.get('/run', run.index);

module.exports = router;