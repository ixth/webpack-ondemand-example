module.exports = {
    devtool: false,
    output: {
        filename: '[name].[hash].js',
    },
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
