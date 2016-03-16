module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};


var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: {
    app: path.resolve(__dirname, 'entry.js'),

    // Since react is installed as a node module, node_modules/react,
    // we can point to it directly, just like require('react');
    vendors: ['react']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [node_modules_dir],
      loader: 'babel'
  },
  { test: /\.css$/, loader: "style!css" }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};

module.exports = config;
