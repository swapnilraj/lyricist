/**
 * Webpack configuration to build the project
 */

'use strict';

const { join } = require('path');

const webpack = require('webpack');
const buildFolder = join(__dirname, 'build');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pkg = require('./package.json');

module.exports = {
  target: 'web',
  mode: 'development',
  entry: {
    content: [
      'babel-polyfill',
      './js/content.js',
    ],
  },
  output: {
    path: buildFolder,
    filename: '[name].js',
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      BUGSNAG_API_KEY: '13895fd55b3e7a9400a21ca642df098e',
      VERSION: pkg.version,
    }),
    new CopyWebpackPlugin([
      { from: './icons/', to: `${buildFolder}/icons/` },
    ]),
  ],
  devtool: 'source-map',
  resolve: {
      extensions: ['.webpack.js', '.web.js', '.js', '.json']
  },
  module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      ]
  },
  node: {
    fs: 'empty'
  }
};
