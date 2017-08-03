exports.index = (req, res, next) => {
    let result = {
        title: '奔跑吧，呆瓜',
        model: 'games'
    };

    res.render('run', result);
};