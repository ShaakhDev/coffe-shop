import {AppStackParamList} from '@/navigators';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {ActivityIndicator, View, ViewStyle} from 'react-native';

export const InitialScreen = ({
  navigation,
}: NativeStackScreenProps<AppStackParamList>) => {
  useEffect(() => {
    const token = null;
    if (token) {
      navigation.navigate('BottomTab');
    } else {
      navigation.navigate('Auth');
    }
  }, []);
  return (
    <View style={$container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
