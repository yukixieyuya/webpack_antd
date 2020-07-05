let path = require("path");
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebapckPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: "/",
        filename: "main.js"
    },
    module: {
        rules:[
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test:/\.(css|styl)$/,
                use:ExtractTextWebapckPlugin.extract({
                    use: ['css-loader',
                        {
                            loader:'stylus-loader',
                            options:{
                                sourceMap: true
                            }
                        }
                    ]
                }

                    )
            },
            {
                test:/\.(js|jsx|ts)$/,
                exclude:/node_modules/, //排除
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets: [['@babel/preset-env',{
                            targets: {
                                "edge": "17",
                                "firefox": "60",
                                "chrome": "67",
                                "safari": "11.1",
                                "ie": "11"
                            },
                            useBuiltIns:'usage'
                        }],"@babel/preset-react"],
                        plugins: ['@babel/plugin-proposal-class-properties',
                            ['import', {libraryName: 'antd', style: 'css'}]
                        ]
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif|bmp|tiff|eot)$/g,
                use: [
                    {
                        loader: 'url-loader',//图片压缩至base64
                        options: {
                            limit: 4192,
                            name: 'images/[name]-[hash:8].[ext]',
                        }
                    }
                ]
            },
            // {
            //     test: /\.styl$/,
            //     loaders: ['style-loader', 'css-loader', 'stylus-loader'],
            //     use: [
            //         {
            //             loader: require.resolve('file-loader'),
            //             // Exclude `js` files to keep "css" loader working as it injects
            //             // it's runtime that would otherwise processed through "file" loader.
            //             // Also exclude `html` and `json` extensions so they get processed
            //             // by webpacks internal loaders.
            //             exclude: [/\.js$/, /\.html$/, /\.json$/,/\.styl$/],
            //             options: {
            //                 name: 'static/media/[name].[hash:8].[ext]',
            //             },
            //         },
            //     ]
            // },
        ]
    },
    resolve: { 	//与module同级
        extensions: [ '.js', '.css', 'scss', '.json', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '~': path.resolve(__dirname, '/')
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'yuKi',//html 浏览器的标题
            filename:'index.html',//输出到dist的文件名
            template:'./public/index.html',//要参考的html模板
            hash:true, //防止缓存,会给文件后面加入hash
            minify:{
                //是否去除空格，默认false
                collapseWhitespace: true,

                //是否压缩html里的css（使用clean-css进行的压缩） 默认值false；
                minifyCSS: true,

                //是否压缩html里的js（使用uglify-js进行的压缩）
                minifyJS: true,

                //是否移除注释 默认false
                removeComments: true,
            },
            // favicon:'./public/favicon.ico',//配置网址图标
        }),
        new ExtractTextWebapckPlugin('css/[name][hash:6].css'),
        new CleanWebpackPlugin.CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname,'public'), to: path.resolve(__dirname,'build') }
        ]),
        new webpack.ProvidePlugin({//设置公共模块的自动加载
            // $: 'jquery',
            _: 'lodash',
            axios:'axios'
        })
    ]
};