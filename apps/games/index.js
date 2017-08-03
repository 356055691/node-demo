var express = require('express');
var app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'views'));

app.use(require('./router'));

module.exports = app;