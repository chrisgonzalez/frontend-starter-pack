const path = require('path');
const webpack = require('webpack');
const prod = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        main: [
            // polyfills
            'whatwg-fetch',
            // 'es5-shim',
            'es6-promise',
            path.join(__dirname, 'js/main.js')
        ]
    },

    output: {
        path: path.join(__dirname, prod ? '/dist/' : ''),
        filename: '/js/[name].bundle.js',
        /* path root for imports */
        publicPath: __dirname
    },

    module: {
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
        modules: [__dirname, path.join(__dirname, '/node_modules')],
        extensions: [
            '.js'
        ]
    },

    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ]
};
