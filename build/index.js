#!/usr/bin/env node
'use strict';
const webpack = require('webpack');
const webpackConfig=require('../config/webpack');
webpack(webpackConfig,(err, stats) => {
    if(err) throw err;
    if (stats.hasErrors()) {
        console.log('  Build failed with errors.\n')
        process.exit(1)
    }
    console.log('构建完成');
});
module.exports = webpackConfig;