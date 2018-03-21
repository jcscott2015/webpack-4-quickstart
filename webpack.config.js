const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // mode: 'development',
    performance: {
        hints: false
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json', 'map']
    },
    devtool: 'inline-source-map',
    target: 'web',
    output: {
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, {
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
            },
            // }, {
            // test: /(\.css|\.scss|\.sass)$/,
            // exclude: /node_modules/,
            // use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: [{
            //             loader: 'css-loader',
            //             options: {
            //                 minimize: true,
            //                 sourceMap: true
            //             }
            //         }, {
            //             loader: 'sass-loader',
            //             options: {
            //                 includePaths: [path.resolve(__dirname, './src', './src/sass')],
            //                 sourceMap: true
            //             }
            //         }]
            //     })
            // }, {
            //     test: /(\.css|\.scss|\.sass)$/,
            //     exclude: /node_modules/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         "css-loader", {
            //             loader: "sass-loader",
            //             options: {
            //                 includePaths: [path.resolve(__dirname, './src', './src/sass')],
            //                 sourceMap: true
            //             }
            //         }
            //     ]
        }, {
            test: /(\.css|\.scss|\.sass)$/,
            exclude: /node_modules/,
            use: [
                // MiniCssExtractPlugin.loader,
                "style-loader", {
                    loader: "css-loader",
                    options: {
                        module: true
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        includePaths: [path.resolve(__dirname, './src', './src/sass')],
                        sourceMap: true
                    }
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        // new ExtractTextPlugin('[name].css'),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};