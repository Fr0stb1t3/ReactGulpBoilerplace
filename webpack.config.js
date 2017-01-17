var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/js');
var APP_DIR = path.resolve(__dirname, 'src/scripts');
var config = {
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  },
  entry: [
    APP_DIR + '/index.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  plugins: [
   new webpack.HotModuleReplacementPlugin(),
   // enable HMR globally

   new webpack.NamedModulesPlugin(),
   // prints more readable module names in the browser console on HMR updates
 ]
};

module.exports = config;
