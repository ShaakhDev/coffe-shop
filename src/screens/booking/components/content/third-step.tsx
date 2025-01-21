import {Button, Text} from '@/components';
import {spacing} from '@/theme';
import {View, ViewStyle} from 'react-native';

type ThirdStepProps = {
  onFinish: () => void;
};
export const ThirdStep = ({onFinish}: ThirdStepProps) => {
  return (
    <View>
      <View style={$container}>
        <Text
          style={{textAlign: 'left'}}
          size="lg"
          weight="bold"
          fontFamily="syne">
          Payment info
        </Text>
        <Text size="xs" preset="secondaryText">
          Please enter your payment method
        </Text>

        <View style={{gap: spacing.md, marginTop: spacing.xxl}}>
          {/* Participants dropdown */}
        </View>

        <Button style={{marginTop: spacing.xxl}} onPress={onFinish}>
          Pay now
        </Button>
      </View>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  padding: spacing.md,
};
