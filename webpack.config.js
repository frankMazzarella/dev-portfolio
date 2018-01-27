var webpack = require('webpack');
var path = require('path');

module.exports = {
  debug: true,
  entry: {
    main: './src/app.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: []
  }
};
