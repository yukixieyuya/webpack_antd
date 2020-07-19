let path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common');

// const apiMocker = require('webpack-api-mocker')
const api = require(path.resolve(__dirname, 'src/api/index.js'))
// let apiDomainMap =
module.exports = merge(common,{

    mode: 'development',

    devtool:'inline-source-map',



    devServer:{//配置开发服务器
        port: 6236,
        open: true,
        // hot:true,
        before (app, server, complie) {
            // if(process.env.MOCK) {
            //     console.log(app)
            //     apiMocker(app, path.resolve(__dirname, 'src/mocker/index.js'), {
            //         // proxy: 'http://localhost:6236',
            //         changeHost: true
            //     })
            // apiMocker(app, path.resolve(__dirname, 'src/api/index.js'), {
            //     // proxy: 'http://localhost:6236',
            //     changeHost: true
            // })
            // app.listen(6236)
            // }
            // app.get('/api/goods', function (req,res) {
            //     res.json({
            //         type:0,
            //         data:'goods'
            //     })
            // })
            api(app)
        },
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
            // '/': {
            //     target: 'http://localhost:10000',
            //     // pathRewrite: {'^/api' : ''}
            // },
            // '/douban': {
            //     target: 'http://music.163.com',
            //     pathRewrite: {'^/douban' : ''},
            //     secure: false //接受https的代理
            // },
            '/weiyinfu': {
                target: 'https://github.com',
                // port: 80,
                // ingorePath 默认即为 false, 注释掉也可以
                // ingorePath: false,
                // changeOrigin是关键，如果不加这个就无法跳转请求
                changeOrigin: true,
                // pathRewrite: {'^/weiyinfu' : ''},
                secure: true //接受https的代理。。。 因为使用的是https，会有安全校验，所以设置secure为false
            },
            // '/api': {
            //     target: 'http://localhost:3000',
            //     changeOrigin: true,
            //     // pathRewrite: {'^/api' : '/'}
            // },
            '/v1': {
                target: 'https://api.doctorxiong.club',
                changeOrigin: true,
                // pathRewrite: {'^/api' : '/'}
                secure: false //接受https的代理
            },
            '/': {
                target: 'http://fund.eastmoney.com',
                changeOrigin: true,
                // pathRewrite: {'^/api' : '/'}
                secure: true //接受https的代理
            },
        },

        watchContentBase: true, //监听public下的文件变动

    }

})