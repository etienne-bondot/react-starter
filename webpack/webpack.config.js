const path = require('path');

const ABSOLUTE_BASE = path.resolve('.');

const config = {
  absoluteBase: ABSOLUTE_BASE,
  appDir: path.join(ABSOLUTE_BASE, 'src/app'),
  assetsDir: path.join(ABSOLUTE_BASE, 'assets'),
  outputDir: path.join(ABSOLUTE_BASE, 'public'),
  srcDir: path.join(ABSOLUTE_BASE, 'src'),
  webpackDir: path.join(ABSOLUTE_BASE, 'webpack'),
};

module.exports = config;
