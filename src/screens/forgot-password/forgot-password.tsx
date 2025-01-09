import {AppStackParamList} from '@/navigators';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View, ViewStyle} from 'react-native';

export const ForgotPasswordScreen = ({
  navigation,
}: NativeStackScreenProps<AppStackParamList>) => {
  return (
    <View style={$container}>
      <Text>ForgotPassword Screen</Text>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
