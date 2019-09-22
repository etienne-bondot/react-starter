module.exports = {
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    [
      'module-resolver',
      {
        alias: {
          src: './src/app',
          assets: './assets'
        }
      }
    ],
    'babel-plugin-macros'
  ],
  presets: ['@babel/env', '@babel/react', '@babel/typescript']
};
