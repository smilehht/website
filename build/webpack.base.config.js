const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FileManagerPlugin = require('filemanager-webpack-plugin');

let env = process.env.NODE_ENV;
let isProd = env == 'production';

let config = {
    entry: path.resolve(__dirname, '../view/index.js'),
    output: {
        filename: '[name]-[hash:8].js'
    },
    resolve: {
        alias: {
            imgUrl: path.resolve(__dirname, '../view/images/'),
            '@': path.resolve(__dirname, '../view/')
        },
        extensions: ['.js', '.vue', '.css', '.scss']
    },
    // externals: {
    //     'vue': 'Vue',
    //     'vue-router': 'VueRouter'
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [path.resolve(__dirname, '../node_modules')],
                loader: 'happypack/loader?id=babel'
                // loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.less$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    // 'happypack/loader?id=css',
                    "less-loader"
                    // 'happypack/loader?id=less'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name]-[hash:8].css"  // 提取出来的css文件路径以及命名
        }),
        new VueLoaderPlugin(),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../dist/dll/manifest.json')
        }),
        new HappyPack({
            id: 'babel',
            loaders: ['babel-loader']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../view/index.html'),
            inject: 'body',
            filename: 'index.html',
            chunks: '',
        }),
        new FileManagerPlugin({
            onStart: {
                copy: [
                    {
                        source: path.resolve(__dirname, '../view/demo'),
                        destination: path.resolve(__dirname, '../dist/demo')
                    },
                    {
                        source: path.resolve(__dirname, '../view/assets'),
                        destination: path.resolve(__dirname, '../dist/assets')
                    }
                ]
            }
        })
    ]
};

module.exports = config;