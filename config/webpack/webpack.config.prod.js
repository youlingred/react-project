'use strict';
const path=require('path');
const merge=require('webpack-merge');
const baseConfig=require('./webpack.config.base');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const prod={
    mode:'production',
    plugins:[
        new CleanWebpackPlugin(path.resolve(process.cwd(),'./dist'),{
            root:process.cwd(),
        })
    ]
};
module.exports=merge(baseConfig,prod);