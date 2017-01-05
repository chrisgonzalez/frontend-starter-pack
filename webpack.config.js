const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: [
            // polyfills
            'whatwg-fetch',
            'es5-shim',
            'es6-promise',
            path.join(__dirname, 'js/main.js')
        ]
    },

    output: {
        path: __dirname,
        filename: 'js/[name].bundle.js',
        /* path root for imports */
        publicPath: __dirname
    },

    module: {
        preLoaders: [
            {
                test: /\.json$/,
                loader: 'json'
            }
        ],

        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'es2015',
                        'stage-0'
                    ]
                }
            }
        ]
    },

    resolve: {
        root: __dirname,
        extensions: [
            '',
            '.js'
        ]
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ]
};
