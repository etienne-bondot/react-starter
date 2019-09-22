const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;

const webpackConfig = require('./webpack.config');

const webpackDevConfig = require('./webpack.dev');

const serverConf = merge.smart(webpackDevConfig, {
  entry: {
    app: ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/dev-server'],
  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(webpackConfig.absoluteBase, 'public'),
    historyApiFallback: true,
    hot: true,
    port: 8080,
  },
  performance: {
    hints: false,
  },
  plugins: [new HotModuleReplacementPlugin()],
});

module.exports = serverConf;
