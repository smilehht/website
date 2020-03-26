export default {
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
    }
}