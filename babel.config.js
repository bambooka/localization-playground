module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
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