module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["@babel/plugin-transform-private-methods", { "loose": true }],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './src/app',
          '@entities': './src/entities',
          '@features': './src/features',
          '@pages': './src/pages',
          '@shared': './src/shared',
          '@widgets': './src/widgets',
        },
      },
    ],
  ],
};