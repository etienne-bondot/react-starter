const cssNano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackConfig = require('../webpack.config');

function getRulesConf() {
  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              ident: 'postcss',
              options: {
                ident: 'postcss',
                plugins: () => [postcssPresetEnv(), cssNano()],
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
      ],
    },
  };
}

module.exports = getRulesConf;
