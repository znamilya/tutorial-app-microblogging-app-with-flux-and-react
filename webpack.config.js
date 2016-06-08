'use strict';

var webpack           = require('webpack');
var path              = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var sourcePath        = path.join(__dirname, 'src');
var distPath          = path.join(__dirname, 'public');

module.exports = {
    devtool: 'inline-cheap-module-eval-source-map',
    target: 'web',
    entry: [
        'webpack-dev-server/client?http://localhost:6565',
        'webpack/hot/only-dev-server',
        path.join(sourcePath, 'main'),
    ],

    output: {
        path: distPath,  
        filename: 'js/main.js',
        publicPath: 'public/',
    },

    resolve: {
        root: sourcePath,
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*'],
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                include: sourcePath,
                loaders: ['babel-loader'],
            },
            {
                test: /\.styl$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader'],
            },
            {
                test: /\.svg$/,
                loaders: ['file-loader?name=svg/[name].[ext]'],
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$/,
                loaders: ['file-loader?name=img/[name].[ext]'],
            },
            
        ]
    },

    plugins: [
        new ExtractTextPlugin('main.css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],

    devServer: {
        port: 6565,
        host: 'localhost',
        hot: true,
        historyApiFallback: true,
        contentBase: './public',
    }
};