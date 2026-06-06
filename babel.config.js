module.exports = function babelConfig(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            "@src/*": ["./src/*"],
            "@assets/*": ["./src/assets/*"],
            "@components/*": ["./src/components/*"],
            "@themes/*": ["./src/themes/*"],
            "@constants/*": ["./src/constants/*"],
            "@services/*": ["./src/services/*"],
            "@utils/*": ["./src/utils/*"],
            "@hooks/*": ["./src/hooks/*"],
            "@navigation/*": ["./src/navigation/*"],
            "@screens/*": ["./src/screens/*"],
            "@store/*": ["./src/store/*"]
          }
        }
      ]
    ]
  };
};
