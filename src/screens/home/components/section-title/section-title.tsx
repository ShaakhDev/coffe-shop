import {Text} from '@/components';
import {colors, spacing} from '@/theme';
import {Pressable, View, ViewStyle} from 'react-native';

type SectionTitleProps = {
  title: string;
  onPress: () => void;
};

export const SectionTitle = ({onPress, title}: SectionTitleProps) => {
  return (
    <View style={$container}>
      <Text size="md" fontFamily="syne" weight="semiBold">
        {title}
      </Text>
      <Pressable onPress={onPress}>
        <Text weight="medium" style={{color: colors.lightGreen}}>
          View all
        </Text>
      </Pressable>
    </View>
  );
};

const $container: ViewStyle = {
  paddingHorizontal: spacing.md,
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
};
