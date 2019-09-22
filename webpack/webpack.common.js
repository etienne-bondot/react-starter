const path = require('path');

const webpackConfig = require('./webpack.config');

const commonConf = {
  entry: {
    app: [
      'babel-polyfill',
      path.join(webpackConfig.appDir, 'index.tsx'),
      path.join(webpackConfig.srcDir, 'scss/styles.scss'),
    ],
  },
  devtool: 'cheap-eval-source-map',
  output: {
    filename: '[name].js',
    path: webpackConfig.outputDir,
    publicPath: webpackConfig.assetsPath,
  },
  resolve: {
    alias: {
      src: webpackConfig.appDir,
      assets: webpackConfig.assetsDir,
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
};

module.exports = commonConf;
