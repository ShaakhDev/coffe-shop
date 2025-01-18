import {Text} from '@/components';
import {colors, spacing} from '@/theme';
import {Pressable, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const HomeHeader = () => {
  return (
    <View style={[$row, {paddingHorizontal: spacing.md}]}>
      <View style={$avatarWrapper}></View>
      <View style={[$row, $rightSide]}>
        <View>
          <Text
            weight="semiBold"
            fontFamily="syne"
            size="lg"
            style={{lineHeight: 19}}>
            Hi John
          </Text>
          <Text size="xs" preset="secondaryText" style={{lineHeight: 16}}>
            Welcome back
          </Text>
        </View>
        <View style={[$row, {gap: spacing.sm}]}>
          <Pressable style={$icon}>
            {/* @ts-ignore */}
            <Icon name="bag-outline" size={20} color={colors.commonBorder} />
          </Pressable>
          <Pressable style={$icon}>
            {/* @ts-ignore */}
            <Icon
              name="notifications-outline"
              size={20}
              color={colors.commonBorder}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const $row: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  gap: spacing.md,
};

const $avatarWrapper: ViewStyle = {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: 'gray',
  marginRight: 10,
};
const $icon: ViewStyle = {
  width: 34,
  height: 34,
  borderRadius: 10,
  borderWidth: 0.5,
  borderColor: colors.gray1,
  alignItems: 'center',
  justifyContent: 'center',
};
const $rightSide: ViewStyle = {
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
};
