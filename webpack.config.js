


var webpack = require('webpack');

// var nodeModules = path.join(__dirname,"node_moodules");
var DashboardPlugin = require('webpack-dashboard/plugin');
// 入口文件
var entries = {
    'detail' : './js/detail.js',
    'backend': './js/t-backend.js',
    'index'  : './js/t-base.js',
}
module.exports = {
    entry : entries,
    output : {//输出配置
        filename : './js/dist/[name].bundle.js',
    },
    module:{//加载器配置
        loaders : [
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {
                test    : /\.js[x]?$/,
                loader  : "babel-loader?presets[]=es2015"
            }
        ]
    },
    plugins: [
        new DashboardPlugin({ port:9188}),
        // 压缩js的plugins
        new webpack.optimize.UglifyJsPlugin({
            sourceMap : false,
            mangle    : false,
            compress  : {
                warnings: false
            }
        }),
    ]
};


