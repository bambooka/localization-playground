module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    ['module-resolver', {
      root: ['./src'],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      alias: {
        "@shared": "./src/shared",
        "@app": "./src/app",
        "@screens": "./src/screens",
        "@entities": "./src/entities",
        "@features": "./src/features",
        "@widgets": "./src/widgets"
      }
    }]
  ],
  presets: ['module:@react-native/babel-preset'],
};
