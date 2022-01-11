const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development', // production
    devtool: 'eval', // hidden-source-map
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts'],
    },

    entry: {
        app: './client'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
            query: {
                presets: ['es2015', 'react']
            },
        }]
    },
    plugins: [],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
    }
}