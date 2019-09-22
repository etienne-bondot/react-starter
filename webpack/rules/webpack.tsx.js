const path = require('path');
const webpackConfig = require('../webpack.config');

function getRulesConf() {
  return {
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          include: [webpackConfig.srcDir],
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: ['react-hot-loader/babel'],
            },
          },
        },
        {
          test: /\.js$/,
          use: ['source-map-loader'],
          enforce: 'pre',
        },
      ],
    },
  };
}

module.exports = getRulesConf;
