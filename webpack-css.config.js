// webpack.config.js
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/client');
var PAGES_DIR = path.resolve(__dirname, 'src/pages');

var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    // The standard entry point and output config
    entry: {
		page1: PAGES_DIR + "/page1/dependencies.js",
        page2: PAGES_DIR + "/page2/dependencies.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
        chunkFilename: "[id].js"
    },
    module: {
        loaders: [
            {
				test: /\.jsx?/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
            },
            // Extract css files
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }
            // You could also use other loaders the same way. I. e. the autoprefixer-loader
        ]
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new ExtractTextPlugin("[name].css"),
		new HtmlWebpackPlugin({
            title: 'Page1',
            filename: 'src/pages/page1/index.html', // relative path from "output" directory
            template: PAGES_DIR + '/page1/index.html', // source file
            hash: true
        }),
        new HtmlWebpackPlugin({
            title: 'Page2',
            filename: 'src/pages/page2/index.html', // relative path from "output" directory
            template: PAGES_DIR + '/page2/index.html' // source file
        })
    ]
}
