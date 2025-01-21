import {Button, Text} from '@/components';
import {TextField} from '@/components';
import {colors, spacing} from '@/theme';
import {View, ViewStyle} from 'react-native';
type FirstStepProps = {
  onNext: () => void;
};

export const FirstStep = ({onNext}: FirstStepProps) => {
  return (
    <View>
      <View style={$container}>
        <Text
          style={{textAlign: 'left'}}
          size="lg"
          weight="bold"
          fontFamily="syne">
          Billing info
        </Text>
        <Text size="xs" preset="secondaryText">
          Please enter your billing info
        </Text>

        <View style={{gap: spacing.md, marginTop: spacing.xxl}}>
          <TextField
            label="Full Name"
            placeholder="Enter your name"
            HelperTextProps={{style: {color: colors.gray1}}}
          />
          <TextField
            label="Phone number"
            placeholder="Enter your phone"
            HelperTextProps={{style: {color: colors.gray1}}}
          />
          <TextField
            label="Address"
            placeholder="Address..."
            HelperTextProps={{style: {color: colors.gray1}}}
          />
        </View>

        <Button style={{marginTop: spacing.xxl}} onPress={onNext}>
          Next
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

const $row: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: spacing.md,
};
