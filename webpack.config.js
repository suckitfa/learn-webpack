const path = require('path')
module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory:true,
                        presets: [
                            [
                                'env',{modules:false}
                            ]
                        ]
                    }
                }
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