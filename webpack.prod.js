const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // In production, publicPath needs to be "./" instead of "/".
        // publicPath: './',
        filename: 'js/[name].[chunkhash].js'
            //chunkFilename: "[chunkhash].[id].chunk.js"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            noInfo: true // set to false to see a list of every file being bundled.
        }),

        /* Use CommonsChunkPlugin to create a separate bundle of vendor libraries so that they're cached separately. */
        // new webpack
        //   .optimize
        //   .SplitChunksPlugin({ name: './vendor' }),

        // Extract CSS into separate files.
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/[name].[chunkhash].css"
                // chunkFilename: "css/[id].css"
        }),

        // Create HTML file that includes reference to bundled JS.
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './src/index.html',
            filename: "./index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true,
            xhtml: true
        })
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                "env": {
                    "modules": false
                }
            }
        }, {
            test: /(\.css|\.scss|\.sass)$/,
            exclude: /node_modules/,
            use: [
                MiniCssExtractPlugin.loader, {
                    loader: "css-loader",
                    options: {
                        minimize: {
                            discardComments: {
                                removeAll: true
                            }
                        },
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
            test: /\.(ttf|eot|woff|woff2|svg)$/,
            exclude: [
                path.resolve(__dirname, "node_modules"),
                path.resolve(__dirname, "src/img")
            ],
            use: {
                loader: 'file-loader',
                options: {
                    name: "fonts/[name].[ext]",
                },
            }
        }, {
            test: /\.(png|jp(e*)g|svg)$/,
            exclude: [
                path.resolve(__dirname, "node_modules"),
                path.resolve(__dirname, "src/fonts")
            ],
            use: {
                loader: 'url-loader',
                options: {
                    limit: 8000,
                    name: 'img/[hash]-[name].[ext]'
                }
            }
        }]
    }
});