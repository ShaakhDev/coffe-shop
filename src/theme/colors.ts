export const palette = {
  darkGreen: '#06342A',
  lightGreen: '#1A8C73',
  lightGreenShade: '#D5F3EC',
  gold: '#E1AA72',
  brown: '#9D6733',
  white: '#FFFFFE',
  red: '#E52C42',
  black: '#0E0F0F',
  gray1: '#7A7E80',
  gray2: '#B4B6B8',
  gray3: '#6E767B',
};

export const colors = {
  brownButton: palette.brown,
  defaultButton: palette.lightGreen,
  welcomeBackground: palette.darkGreen,
  text: palette.black,
  textDim: palette.gray3,
  placeholder: palette.gray2,
  error: palette.red,
  tabBarFocused: palette.red,
  tabBarUnfocused: palette.gray3,
  ...palette,
};
