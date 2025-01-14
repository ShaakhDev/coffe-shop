import {Button, Text, TextField} from '@/components';
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

export const ForgotPasswordScreen = ({
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
        Forgot Password
      </Text>
      <Text style={{marginBottom: spacing.md}}>
        Set new password for your account
      </Text>
      <View style={{gap: spacing.md}}>
        <TextField
          label="Password"
          placeholder="Enter your password"
          HelperTextProps={{style: {color: colors.gray1}}}
        />
        <TextField
          label="Confirm Password"
          placeholder="Repeat your password"
          HelperTextProps={{style: {color: colors.gray1}}}
        />
      </View>

      <Button
        style={{marginTop: spacing.lg}}
        onPress={() => navigation.navigate('OtpVerification')}>
        Continue
      </Button>
      <View style={$row}>
        <Text preset="secondaryText">Don't have an account? </Text>
        <Pressable onPress={handleNavigate}>
          <Text style={{color: colors.error}}>Sign up</Text>
        </Pressable>
      </View>
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
