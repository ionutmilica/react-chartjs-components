'use strict';

var webpack = require('webpack');
var paths = require('./paths');

console.log(paths.appSrc);

module.exports = {
  bail: true,
  entry: [
    paths.libIndexJs,
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
        include: paths.appSrc,
        exclude: /node_modules/
      },
    ]
  },

  externals: [
    {
      "react": {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
      },
      "react-dom": {
        root: "ReactDOM",
        commonjs2: "react-dom",
        commonjs: "react-dom",
        amd: "react-dom"
      },
      "chart.js": {
        root: "Chart",
        commonjs2: "chart.js",
        commonjs: "chart.js",
        amd: "chart.js"
      }
    }
  ],

  output: {
    path: paths.appDist,
    filename: 'react-chartjs-components.min.js',
    libraryTarget: 'umd',
    library: 'react-chartjs-components',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ]
};
