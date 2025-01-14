import {Button, Text} from '@/components';
import {colors, spacing} from '@/theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Image,
  ImageStyle,
  Pressable,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {AuthStackParamList} from 'src/navigators/auth-navigator';
import {OtpInput} from 'react-native-otp-entry';

export const OtpVerificationScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList>) => {
  const handleNavigate = () => {
    navigation.navigate('Register');
  };
  return (
    <View style={$container}>
      <View style={$imageWrapper}>
        <Image
          source={require('assets/images/login.webp')}
          style={$image}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{textAlign: 'left'}}
        size="xl"
        weight="bold"
        fontFamily="syne">
        OTP Verification
      </Text>
      <Text style={{marginBottom: spacing.md}}>
        OTP has been sent to your email. It will automatically fill the input
        box
      </Text>
      <OtpInput
        numberOfDigits={4}
        focusColor="green"
        autoFocus={false}
        hideStick={true}
        placeholder="****"
        blurOnFilled={true}
        disabled={false}
        type="numeric"
        secureTextEntry={false}
        focusStickBlinkingDuration={500}
        onFocus={() => console.log('Focused')}
        onBlur={() => console.log('Blurred')}
        onTextChange={text => console.log(text)}
        onFilled={text => console.log(`OTP is ${text}`)}
        textInputProps={{
          accessibilityLabel: 'One-Time Password',
        }}
        theme={{
          containerStyle: {
            maxWidth: 250,
            marginHorizontal: 'auto',
            marginBottom: spacing.lg,
          },
          // pinCodeContainerStyle: styles.pinCodeContainer,
          // pinCodeTextStyle: styles.pinCodeText,
          // focusStickStyle: styles.focusStick,
          // focusedPinCodeContainerStyle: styles.activePinCodeContainer,
          // placeholderTextStyle: styles.placeholderText,
          // filledPinCodeContainerStyle: styles.filledPinCodeContainer,
          // disabledPinCodeContainerStyle: styles.disabledPinCodeContainer,
        }}
      />
      <Text style={{textAlign: 'center'}}>03:00 </Text>
      <Pressable onPress={handleNavigate}>
        <Text style={{color: colors.lightGreen, textAlign: 'center'}}>
          Resend code
        </Text>
      </Pressable>
      <Button
        style={{marginTop: spacing.xl}}
        onPress={() =>
          navigation.navigate('Success', {
            title: 'Successfully verified',
            description: 'You have done your verification sucessfully',
          })
        }>
        Verify
      </Button>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  padding: spacing.md,
};
const $imageWrapper: ViewStyle = {
  height: 140,
  marginBottom: spacing.lg,
};
const $image: ImageStyle = {
  height: '100%',
  // width: 120,
};
const $row: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: spacing.md,
};
const $forgotText: TextStyle = {
  color: colors.error,
  textAlign: 'right',
  marginTop: spacing.md,
};
