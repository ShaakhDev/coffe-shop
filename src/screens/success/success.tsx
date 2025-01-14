import {Button, Text} from '@/components';
import {AppStackParamList} from '@/navigators';
import {spacing} from '@/theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Image, View, ViewStyle} from 'react-native';
import {AuthStackParamList} from 'src/navigators/auth-navigator';

export const SuccessScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<AuthStackParamList, 'Success'>) => {
  const params = route.params;
  const title = params?.title;
  const description = params?.description;
  return (
    <View style={$container}>
      <View style={$imageWrapper}>
        <Image
          source={require('assets/images/success.png')}
          style={{width: '100%', height: '100%'}}
          resizeMode="contain"
        />
      </View>
      <Text
        size="xxl"
        fontFamily="syne"
        weight="bold"
        style={{textAlign: 'center'}}>
        {title}
      </Text>
      <Text style={{textAlign: 'center'}}>{description}</Text>
      <Button
        style={{marginTop: spacing.xxl}}
        onPress={() => navigation.navigate('Login')}>
        Login
      </Button>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: spacing.md,
};
const $imageWrapper: ViewStyle = {
  width: 100,
  height: 100,
};
