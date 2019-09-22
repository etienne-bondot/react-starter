const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const DefinePlugin = webpack.DefinePlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackCommon = require('./webpack.common');
const webpackConfig = require('./webpack.config');

const webpackFilesRules = require('./rules/webpack.files')();
const webpackJsxRules = require('./rules/webpack.tsx')();
const webpackSassRules = require('./rules/webpack.sass')();

const devConf = merge.smart(webpackCommon, webpackFilesRules, webpackJsxRules, webpackSassRules, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {},
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('develop'),
    }),
    new HtmlWebpackPlugin({
      template: path.join(webpackConfig.srcDir, 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});

module.exports = devConf;
