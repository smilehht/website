const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

let outPath = '../dist/';

let config = merge(baseConfig, {
    mode: 'production',
    output: {
        publicPath: '/public/',
        path: path.resolve(__dirname, outPath),
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: 'file-loader?name=[name].[ext]&publicPath=/public/&outputPath=assets/'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            root: path.resolve(__dirname, '../'),
            verbose: true,
            dry: false,
            exclude: ['dll']
        })
    ]
});

module.exports = config;