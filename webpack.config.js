const path = require('path')
module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    output: {
        filename:'bundle.js'
    },
    mode: 'development',
    devServer: {
        port: 8000,
    }
}