// dirs
const outputRoot = './static/',
      inputRoot = './src/',
      webpackOutput = `${outputRoot}bundles`,
      webpackInput = `${inputRoot}react`;

var entry = (...component) => {
    return `${webpackInput}/bundles/${component.join('/')}/mount.js`;
};

// Plugins
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,
    entry: {
        MyTrip: entry('MyTrip'),
        SelectTrip: entry('SelectTrip'),
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
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /.scss$/,
                loader: 'style!css?minimize&modules!sass'
            }
        ]
    },
    plugins: [
        new BundleTracker({filename: "./webpack-stats.json"})
    ]
};