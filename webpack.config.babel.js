const dotenv = require('dotenv');

const webpack = require('webpack');

const outputRoot = './static/',
    inputRoot = './src/',
    webpackOutput = `${outputRoot}bundles`,
    webpackInput = `${inputRoot}react`;

const BundleTracker = require('webpack-bundle-tracker');

// convert .env keys to form __KEY__
const dotenvVars = dotenv.config();
const envVars = Object.keys(dotenvVars).reduce((memo, key) => {
    memo[`__${key.toUpperCase()}__`] = JSON.stringify(dotenvVars[key]);
    return memo;
}, {});


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
                loader: 'style!css?modules&autoreset&initial&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]&minimize!sass'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin(envVars),
        new BundleTracker({filename: "./webpack-stats.json"}),
    ]
};
