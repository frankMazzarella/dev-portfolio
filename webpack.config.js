var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var WorkboxPlugin = require('workbox-webpack-plugin');
var path = require('path');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body',
  favicon: __dirname + '/src/favicon.ico',
});

var ExtractTextPluginConfig = new ExtractTextPlugin('style.css');

var CopyWebpackPluginConfig =  new CopyWebpackPlugin([
  { from: './src/assets' },
]);

var WorkboxPluginConfig = new WorkboxPlugin({
  globDirectory: 'dist',
  globPatterns: ['**/*.{html,js,css,json,svg,png,docx}'],
  swDest: path.join('dist', 'sw.js'),
  clientsClaim: true,
  skipWaiting: true,
});

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + '/src',
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        include: __dirname + '/src',
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, ExtractTextPluginConfig, CopyWebpackPluginConfig, WorkboxPluginConfig]
}
