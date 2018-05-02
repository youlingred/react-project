'use strict';
const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:path.resolve(process.cwd(),'./src/main.js'),
    output: {
        path:path.resolve(process.cwd(),'./dist'),
        filename: "index.js"
    },
    module:{
        rules: [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                options: {
                    presets: ["react","latest"]
                },
            },
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            minimize:true
                        }
                    },
                ]
            },
            {
                test:/\.(scss|sass)$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            minimize:true
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test:/\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            minimize:true
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test:/\.styl/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            minimize:true
                        }
                    },
                    'stylus-loader'
                ]
            },
            {
                test:/\.(png|jpg|gif|woff|woff2|ttf)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit:8192
                        }
                    }
                ]
            },
            {
                test:/\.(mp4|ogg|svg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@':'./src/',
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(process.cwd(),'./src/index.html'),
            inject: true
        }),
    ],
}