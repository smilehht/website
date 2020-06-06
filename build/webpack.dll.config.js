const path = require('path');
const webpack = require('webpack');

let config = {
    entry: {
        dll: ['vue', 'axios', 'vue-router']
    },
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new webpack.DllPlugin({
            name: "_dll_[name]",
            path: path.join(__dirname, '../dist/dll', 'manifest.json'),
        })
    ]
};

module.exports = config;