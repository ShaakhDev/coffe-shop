module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@/components': './src/components',
          '@/navigators': './src/navigators',
          '@/theme': './src/theme',
          '@/screens': './src/screens',
          '@/constants': './src/constants',
          // '@/utils': './src/utils',
          // '@/config': './src/config',
          // '@/i18n': './src/i18n',
          // '@/icons': './src/resources/icons',
          // '@/hooks': './src/hooks',
          // '@/features': './src/features',
          // '@/store': './src/store',
          // '@/types': './src/store',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
