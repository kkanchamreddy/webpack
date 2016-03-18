// webpack.config.js
var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/client');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
    // The standard entry point and output config
    entry: {
		index: APP_DIR + "/index.jsx",
        entry0: "./entry-0",
        entry1: "./entry-1"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
        chunkFilename: "[id].js"
    },
    module: {
        loaders: [
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
            }
            // You could also use other loaders the same way. I. e. the autoprefixer-loader
        ]
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
}
