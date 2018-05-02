'use strict';
let config;

if (process.env.NODE_ENV === 'development') {
    config = require('./webpack.config.dev');
} else if (process.env.NODE_ENV === 'production') {
    config = require('./webpack.config.prod');
}
module.exports=config;