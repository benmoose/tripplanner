// dirs
const outputRoot = './static/',
      inputRoot = './src/',
      webpackOutput = `${outputRoot}bundles`,
      webpackInput = `${inputRoot}webpack`;

module.exports = {
    context: __dirname,
    entry: {

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
                loader: 'style!css?minimize!sass'
            }
        ]
    }
};