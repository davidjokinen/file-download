const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: './test/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'test/dist'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    'ie': 10
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  }
};
