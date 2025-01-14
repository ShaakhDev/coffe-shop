import {Text} from '@/components';
import {spacing} from '@/theme';
import {ScrollView, ViewStyle} from 'react-native';

export const ChatScreen = () => {
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={$container}>
      <Text>Chat screen</Text>
    </ScrollView>
  );
};

const $container: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.md,
};
