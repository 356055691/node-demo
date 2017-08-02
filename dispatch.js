
module.exports = app => {
    var index = require('./routes/index');
    var users = require('./routes/users');
    var vue = require('./apps/vue');
    var hbs = require('./apps/hbs/index');
    
    app.use('/', index);
    app.use('/users', users);
    app.use('/vue', vue);
    app.use('/hbs', hbs);
};
