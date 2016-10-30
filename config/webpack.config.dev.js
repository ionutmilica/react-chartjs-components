'use strict';

var path = require('path');
var webpack = require('webpack');
var paths = require('./paths');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
    entry: [
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appIndexJs
    ],
    module: {
      preLoaders: [
        {
          test: /\.(js|jsx)$/,
          loader: 'eslint',
          include: paths.appSrc
        }
      ],
      loaders: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel',
          exclude: /node_modules/
        }
      ]
    },
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/bundle.js',
    publicPath: '/'
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
};
