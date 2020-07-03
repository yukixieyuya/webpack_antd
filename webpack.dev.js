let path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common');
module.exports = merge(common,{

    mode: 'development',

    devtool:'inline-source-map',



    devServer:{//配置开发服务器
        port: 6236,
        open: true,
        // hot:true,

        historyApiFallback: true, //打开可通过url访问目标路由

        // compress:true,//一切服务都启用 gzip 压缩
        contentBase: path.join(__dirname, 'public'),//数据|静态资源|html 托管位置

        // '/' 不能改 ，改了不能动态注入资源到public/index.html
        // publicPath: '/',// '/' 指向的是项目环境 开发环境下js资源输出位置取决于output

        stats: 'errors-only',//精确控制要显示的 bundle 信息
        inline:true,//浏览器热刷新
        host: 'localhost',//修改主机ip
        // https: true,//开启https服务器,需要提供签名文件
        progress: true,//开启打包进度

        overlay: true,//浏览器中显示全屏覆盖层。显示编译器错误

        proxy: {//多个代理
            '/': {
                target: 'http://localhost:10000',
                // pathRewrite: {'^/api' : ''}
            },
            '/douban': {
                target: 'http://music.163.com',
                pathRewrite: {'^/douban' : ''},
                secure: false //接受https的代理
            },
            '/weiyinfu': {
                target: 'https://github.com',
                pathRewrite: {'^/weiyinfu' : ''},
                secure: false //接受https的代理
            }
        },

        watchContentBase: true, //监听public下的文件变动

    }

})