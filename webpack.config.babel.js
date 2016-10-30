const dotenv = require('dotenv');

const outputRoot = './static/',
      inputRoot = './src/',
      webpackOutput = `${outputRoot}bundles`,
      webpackInput = `${inputRoot}react`;

const BundleTracker = require('webpack-bundle-tracker');


module.exports = {
    context: __dirname,
    entry: {
        App: `${webpackInput}/index.js`,
    },
    output: {
        path: webpackOutput,
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/(node_modules)/, /gulpfile/],
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            },
            {
                test: /.scss$/,
                loader: 'style!css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]&minimize!sass'
            }
        ]
    },
    plugins: [
        new BundleTracker({filename: "./webpack-stats.json"})
    ]
};