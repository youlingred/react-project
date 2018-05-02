'use strict';
const merge=require('webpack-merge');
const baseConfig=require('./webpack.config.base');

const dev={
    mode:'development',
    devtool: "#source-map",
    devServer: {
        //启动热替换
        hot: true,
        progress:true,
        quiet:true,
        inline:true,
        port:3333,
        open:true
    },
};
module.exports=merge(baseConfig,dev);