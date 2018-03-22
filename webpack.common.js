const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
        new CleanWebpackPlugin(['dist'])
    ],
    module: {
        rules: [{
            test: /\.html$/,
            use: [{
                loader: "html-loader",
                options: {
                    minimize: true
                }
            }]
        }, {
            test: /\.(png|jpg|svg)$/,
            exclude: /node_modules/,
            use: {
                loader: 'file-loader'
            }
        }]
    }
};