import {Button, Text, TextField} from '@/components';
import {colors, spacing} from '@/theme';
import {View, ViewStyle} from 'react-native';

type SecondStepProps = {
  onNext: () => void;
};
export const SecondStep = ({onNext}: SecondStepProps) => {
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
          Please enter your booking date & time
        </Text>

        <View style={{gap: spacing.md, marginTop: spacing.xxl}}>
          {/* <TextField
            label="Full Name"
            placeholder="Enter your name"
            HelperTextProps={{style: {color: colors.gray1}}}
          /> */}
          {/* Participants dropdown */}
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
