var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body',
  favicon: __dirname + '/src/favicon.ico',
});

var ExtractTextPluginConfig = new ExtractTextPlugin('style.css');

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
  plugins: [HtmlWebpackPluginConfig, ExtractTextPluginConfig]
}
