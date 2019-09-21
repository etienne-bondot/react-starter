const merge = require('webpack-merge');
const webpack = require('webpack');

const DefinePlugin = webpack.DefinePlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackCommon = require('./webpack.common');

const webpackFilesRules = require('./rules/webpack.files')();
const webpackJsxRules = require('./rules/webpack.tsx')();
const webpackSassRules = require('./rules/webpack.sass')();

const devConf = merge.smart(webpackCommon, webpackFilesRules, webpackJsxRules, webpackSassRules, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.html/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('develop')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
});

module.exports = devConf;
