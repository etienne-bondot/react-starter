function getRulesConf(emitFile = true) {
  return {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg|woff|swf|zip|woff2|ttf|eot|ico|otf|pdf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                emitFile,
                name: '[path][name].[ext]?[hash]',
                outputPath: '../public',
                publicPath: '/',
              },
            },
          ],
        },
      ],
    },
  };
}

module.exports = getRulesConf;
