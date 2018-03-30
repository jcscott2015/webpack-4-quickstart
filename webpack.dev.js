const path = require('path');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
    },
    output: {
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: './src/favicon.ico',
            title: 'RUMI Portal',
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /(\.css|\.scss|\.sass)$/,
            exclude: /node_modules/,
            use: [
                "style-loader", {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        includePaths: [path.resolve(__dirname, './src', './src/sass')],
                        sourceMap: true
                    }
                }
            ]
        }, {
            test: /\.(png|jp(e*)g|svg)$/,
            exclude: [
                path.resolve(__dirname, "node_modules"),
                path.resolve(__dirname, "src/fonts")
            ],
            use: {
                loader: 'file-loader'
            }
        }, {
            test: /\.(ttf|eot|woff|woff2|svg)$/,
            exclude: [
                path.resolve(__dirname, "node_modules"),
                path.resolve(__dirname, "src/img")
            ],
            use: {
                loader: 'file-loader'
            }
        }]
    }
});