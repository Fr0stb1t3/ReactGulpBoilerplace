var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var webpackDevMiddleware = require("webpack-dev-middleware");
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

/*


*/
var config = {
  context: __dirname + "/src",
  devtool: debug? "inline-sourcemap": null,
  entry: [
    APP_DIR + '/scripts/index.jsx'
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',

        query: {
            // https://github.com/babel/babel-loader#options
            presets: ['es2015', 'react','stage-0'],
            plugins: ['react-html-attrs',"transform-class-properties", "transform-decorators-legacy"]
        }
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: '/js/scripts.build.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),

    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin()
 ]
};

module.exports = config;
