const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    devtool: false,
    entry: './index',
    output: {
        filename: '[name].[chunkhash].js',
        hashDigestLength: 6,
    },
    plugins: [
        new BundleAnalyzerPlugin({
            reportFilename: 'bundleAnalyzer.html',
            analyzerMode: 'static',
            openAnalyzer: false,
            logLevel: 'warn'
        }),
        new HtmlWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};
