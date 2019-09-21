const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DefinePlugin = webpack.DefinePlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const webpackCommon = require('./webpack.common');
const webpackConfig = require('./webpack.config');

const webpackFilesRules = require('./rules/webpack.files')();
const webpackJsxRules = require('./rules/webpack.tsx')();
const webpackSassRules = require('./rules/webpack.sass')();

const devConf = merge.smart(webpackCommon, webpackJsxRules, webpackSassRules, {
  mode: 'production',
  output: {
    filename: '[name].js?[chunkhash]'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: webpackConfig.assetsDir,
        to: 'assets'
      }
    ]),
    new DefinePlugin({
      API_URL: JSON.stringify('https://rabbit-api-develop.herokuapp.com'),
      NODE_ENV: JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      template: path.join(webpackConfig.srcDir, 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
});

module.exports = devConf;
