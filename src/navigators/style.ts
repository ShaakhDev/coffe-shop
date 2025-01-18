import {colors} from '@/theme';
import {TextStyle, ViewStyle} from 'react-native';

export const $tabLabel: TextStyle = {
  color: colors.tabBarUnfocused,
  backgroundColor: 'transparent',
};
export const $focused: TextStyle = {
  color: colors.tabBarFocused,
};
export const $tabBar: ViewStyle = {
  backgroundColor: colors.white,
  alignItems: 'center',
  justifyContent: 'center',
  borderTopWidth: 0,
  height: 60,
};
