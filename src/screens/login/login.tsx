import {Button, Text, TextField} from '@/components';
import {AppStackParamList} from '@/navigators';
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

export const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList & AppStackParamList>) => {
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
        Welcome back!
      </Text>
      <Text style={{marginBottom: spacing.md}}>Login to your account</Text>
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
      <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
        <Text size="xs" style={$forgotText}>
          Forgot password
        </Text>
      </Pressable>
      <Button
        style={{marginTop: spacing.lg}}
        onPress={() => navigation.navigate('BottomTab')}>
        Login
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
