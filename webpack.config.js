
var path = require('path');
var webpack = require('webpack');
var babelpolyfill = require("babel-polyfill");

//配置文档参考 https://doc.webpack-china.org/concepts/
//新手参考 https://segmentfault.com/a/1190000014112145?utm_source=channel-newest
module.exports = {
    //mode: 'development', //打包模式，文档参考 https://webpack.js.org/concepts/mode/#mode-none
    devtool: 'eval-source-map',
    entry:'./client/index.js',
    output:{
        path:path.resolve(__dirname,'./lib'),
        filename:'script.js'
    },
    module: {
        //loaders加载器
        rules: [
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader',//loader的名称（必须）
                query: {
                  presets: ['es2015','stage-0','react']
                },
            },
            
            {test:/\.less$/,loader:'less-loader'},
            {test:/\.sass$/,loader:'sass-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader' },
        ],   
    },
    //webpack-dev-server配置
    devServer: {
        contentBase:'./lib',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        hot:true,
        inline:true,
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port: 5060,//设置默认监听端口，如果省略，默认为"8080"
    },

    // plugins:[
    //   new webpack.DefinePlugin({
    //   'process.env.NODE.ENV':"development"
    //   }),
    //   new webpack.HotModuleReplacementPlugin()
    // ],

    plugins: [
        new webpack.HotModuleReplacementPlugin(),//模块热替换插件 
    ]
}



// webpackConfig.babel.plugins.push([
//     'react-intl', {
//       messagesDir: './client/i18n-messages',
//     },
// ]);

//  module.exports  = webpackConfig;