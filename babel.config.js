module.exports = api => {
  api.cache(true);

  return {
    plugins: [
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread',
      [
        'module-resolver',
        {
          alias: {
            "src": './src/app',
            "assets": './assets',
          },
        },
      ],
      'babel-plugin-macros',
    ],
    presets: [
      [
        '@babel/env',
        {
          targets: {
            chrome: '58',
            ie: '11',
          },
        },
      ],
      '@babel/react',
      '@babel/typescript',
    ],
  };
};
