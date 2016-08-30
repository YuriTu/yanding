


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
        filename : './js/[name].bundle.js',
        // path : path.join(__dirname,'/dist')
    },
    module:{//加载器配置
        loaders : [
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
        ]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin()
        new DashboardPlugin({ port:9188})
    ]
};


