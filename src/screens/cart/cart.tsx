import {Text} from '@/components';
import {spacing} from '@/theme';
import {ScrollView, ViewStyle} from 'react-native';

export const CartScreen = () => {
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={$container}>
      <Text>Cart screen</Text>
    </ScrollView>
  );
};

const $container: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.md,
};
