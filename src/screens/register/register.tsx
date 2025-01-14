import {Button, Text, TextField} from '@/components';
import {colors, spacing} from '@/theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Pressable, View, ViewStyle} from 'react-native';
import {AuthStackParamList} from 'src/navigators/auth-navigator';

export const RegisterScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList>) => {
  const handleNavigate = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={$container}>
      <Text
        style={{textAlign: 'left'}}
        size="xxl"
        weight="bold"
        fontFamily="syne">
        Create new account!
      </Text>

      <View style={{gap: spacing.md}}>
        <TextField
          label="Full Name"
          placeholder="Enter your name"
          HelperTextProps={{style: {color: colors.gray1}}}
        />
        <TextField
          label="Email"
          placeholder="Enter your email"
          HelperTextProps={{style: {color: colors.gray1}}}
        />
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
        style={{marginTop: spacing.xxl}}
        onPress={() => navigation.navigate('OtpVerification')}>
        Register
      </Button>
      <View style={$row}>
        <Text preset="secondaryText">Already have an account? </Text>
        <Pressable onPress={handleNavigate}>
          <Text style={{color: colors.error}}>Login</Text>
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

const $row: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: spacing.md,
};
