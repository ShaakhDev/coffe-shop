import {Text} from '@/components';
import {colors, spacing} from '@/theme';
import {hexToRgb} from '@/utils';
import {Pressable, TextStyle, View, ViewStyle} from 'react-native';

type TimeboxProps = {
  isActive: boolean;
  time: string;
  onSelect: () => void;
};

export const Timebox = ({isActive, onSelect, time}: TimeboxProps) => {
  return (
    <Pressable style={[$box, isActive && $active]} onPress={onSelect}>
      <Text>{time}</Text>
      <View style={$tag}>
        <Text size="xxs" style={$tagText}>
          Select an offer
        </Text>
      </View>
    </Pressable>
  );
};

const $box: ViewStyle = {
  borderWidth: 1,
  borderColor: colors.commonBorder,
  alignItems: 'center',
  borderRadius: spacing.xs,
  padding: spacing.md,
  marginRight: spacing.sm,
};
const $tag: ViewStyle = {
  backgroundColor: colors.error,
  paddingHorizontal: spacing.xs,
  borderRadius: spacing.xxs,
  paddingVertical: 3,
  marginTop: spacing.xs,
};
const $tagText: TextStyle = {
  color: colors.white,
};
const $active: ViewStyle = {
  backgroundColor: hexToRgb(colors.brown, 0.1),
  borderColor: colors.brown,
};
