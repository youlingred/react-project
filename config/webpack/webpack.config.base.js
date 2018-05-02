const path=require('path')

module.exports = {
    entry: path.resolve(__dirname,'../src/main.js'),
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                use: 'react-hot!babel-loader'
            },
            {
                test:/\.css$/,
                use: 'style-loader!css-loader'
            }
        ]
    }
};