const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

let config = merge(baseConfig, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        noInfo: true,
        hot: true,
        hotOnly: true,
        inline: true,
        port: 8083,
        host: 't.jd.com',
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000',
                pathRewrite: { '^/api': '' },
                changeOrigin: true,
                secure: false,
            }
        }
    },
    // devServer: {
    //     noInfo: true,
    //     hot: true,
    //     hotOnly: true,
    //     inline: true,
    //     contentBase: path.join(__dirname, "../dist"),
    //     port: 8083,
    //     host: 't.jd.com',
    //     proxy: [
    //         {
    //             context: ['/api'],
    //             target: 'http://127.0.0.1:3000',
    //             // pathRewrite: { '^/api': '' },
    //             // pathRewrite: '^/api',
    //             changeOrigin: true,
    //             secure: false,
    //         },
    //         {
    //             context: ['/v4'],
    //             target: 'https://git.jd.com',
    //             // pathRewrite: { '^/api': '' },
    //             // pathRewrite: '^/api',
    //             changeOrigin: true,
    //             secure: false,
    //         }
    //     ]
    // },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: 'file-loader?name=[name].[ext]&publicPath=../images/&outputPath=images/'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = config;