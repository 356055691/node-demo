
module.exports = app => {
    var index = require('./apps/index/index');
    var users = require('./routes/users');
    var vue = require('./apps/vue');
    var hbs = require('./apps/hbs/index');
    var games = require('./apps/games/index');
    
    app.use('/', index);
    app.use('/users', users);
    app.use('/vue', vue);
    app.use('/hbs', hbs);
    app.use('/games', games);
};
