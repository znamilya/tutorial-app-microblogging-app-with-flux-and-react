var fs          = require('fs');
var path        = require('path');
var webpack     = require('webpack');

var nodeModules = {};


fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });


module.exports = {
    entry: [
        './src/server',
    ],

    target: 'node',

    output: {
        path: path.join(__dirname, '../build'),
        filename: 'server.js',
        publicPath: '/public/static/',
    },    

    resolve: {
        modulesDirectories: ['node_modules', 'components'],
        extensions: ['', '.js', '.jsx'],
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.styl$/,
                loader: 'null-loader'
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff2?$|\.eot$|\.otf$|\.ttf$$/,
                loader: 'file-loader?name=img/[hash].[ext]'
            },
        ],
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.BannerPlugin('require("source-map-support").install();', {
            raw: true,
            entryOnly: false,
        }),
        new webpack.WatchIgnorePlugin([path.resolve(__dirname, '../src/common')])
    ],

    node: {
      __dirname: true,
      __filename: true
    },

    externals: nodeModules
};
