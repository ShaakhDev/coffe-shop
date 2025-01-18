import {Text} from '@/components';
import {colors} from '@/theme';
import {LabelPosition} from 'node_modules/@react-navigation/bottom-tabs/lib/typescript/module/src/types';
import * as styles from './style';

export const renderTabBarIcon = (Icon: React.ElementType, focused: boolean) => {
  return (
    <Icon fill={focused ? colors.tabBarFocused : colors.tabBarUnfocused} />
  );
};

type TabLabelProps = {
  focused: boolean;
  children: string;
  position: LabelPosition;
  color: string;
};

export const renderTabBarLabel = ({children, focused}: TabLabelProps) => {
  return (
    <Text
      weight={focused ? 'medium' : 'normal'}
      size="xxs"
      style={[styles.$tabLabel, focused && styles.$focused]}
      text={children}
    />
  );
};
