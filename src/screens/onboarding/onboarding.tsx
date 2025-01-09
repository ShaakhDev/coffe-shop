import {AppStackParamList} from '@/navigators';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View, ViewStyle} from 'react-native';

export const OnboardingScreen = ({
  navigation,
}: NativeStackScreenProps<AppStackParamList>) => {
  return (
    <View style={$container}>
      <Text>Onboarding Screen</Text>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
