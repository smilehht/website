var path = require('path');

const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
    // resolve: {
    //     alias: {
    //         imgUrl: path.resolve(__dirname, '../view/images/'),
    //         '@': path.resolve(__dirname, '../view/')
    //     },
    //     extensions: ['.js', '.vue', '.css', '.scss']
    // },

    devServer: {
        noInfo: true,
        hot: true,
        hotOnly: true,
        inline: true,
        port: 8083,
        host: 't.jd.com',
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3333',
                pathRewrite: { '^/api': '' },
                changeOrigin: true,
                secure: false,
            }
        }
    },
    configureWebpack: {
        plugins: [
            new FileManagerPlugin({
                onStart: {
                    source: path.resolve(__dirname, './src/demo'),
                    destination: path.resolve(__dirname, './dist/')
                }
            })
        ]
    }
}