const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json', 'map']
    },
    target: 'web',
    output: {
        filename: '[name].bundle.js',
        // publicPath: '/'
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),

        new CopyWebpackPlugin([{
            from: './src/img',
            to: './img/'
        }, {
            from: './src/img/icons',
            to: './img/icons/'
        }])
    ],
    module: {
        rules: [{
            enforce: "pre",
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "eslint-loader",
            options: {
                failOnError: true
            }
        }, {
            test: /\.html$/,
            use: [{
                loader: "html-loader",
                options: {
                    minimize: true
                }
            }]
        }]
    }
};