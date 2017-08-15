//webpack.config.js
let entery = {
        'index': './public/js/index/index.js', 
        'vue': './public/js/vue/index.js', 
        'hbs': './public/js/hbs/index.js',
        'games': './public/js/games/index.js'
    };

let precss = require('precss');
let autoprefixer = require('autoprefixer');
let webpack = require('webpack');

module.exports = {
    entry : entery,//入口文件
    output : {//输出文件
        filename : '[name].js',//输出文件名
        path : __dirname + '/public/build'//输出文件路径
    },
    module : {
        rules: [
            {test: /.js$/, use: ['babel-loader']},
            {test: /.css$/, use: [
                'style-loader',
                'css-loader', 
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: (loader) => [
                            require('postcss-import')(),
                            require('autoprefixer')(),
                            require('cssnano')(),
                            require('postcss-import')(),
                            require('precss')(),
                        ]
                    }
                }
            ]},/*解析css, 并把css添加到html的style标签里*/
            //{test: /.css$/, use: ExtractTextPlugin.extract({fallback: 'style-loader',use: 'css-loader'})},/*解析css, 并把css变成文件通过link标签引入*/
            {test: /.(jpg|png|gif|svg)$/, use: ['url-loader?limit=8192&name=./[name].[ext]']},/*解析图片*/
            {test: /.less$/, use: ['style-loader', 'css-loader', 'less-loader']}/*解析less, 把less解析成浏览器可以识别的css语言*/
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            test: /.css$/,
            postcss: function plugins(bundler) {
                return [
                    require('postcss-import')({ addDependencyTo: bundler }),
                    require('precss')(),
                    require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS }),
                ];
            },
        })
    ]
};