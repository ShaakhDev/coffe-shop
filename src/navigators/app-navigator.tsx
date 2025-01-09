import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, Text} from 'react-native';
import {AuthNavigator} from './auth-navigator';
import {TabNavigator} from './tab-navigator';
import {InitialScreen} from '@/screens';

export type AppStackParamList = {
  Initial: undefined;
  Auth: undefined;
  BottomTab: undefined;
};
const AppStack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="Initial" component={InitialScreen} />
      <AppStack.Screen name="Auth" component={AuthNavigator} />
      <AppStack.Screen name="BottomTab" component={TabNavigator} />
    </AppStack.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Text>Verification</Text>
    </SafeAreaView>
  );
};
