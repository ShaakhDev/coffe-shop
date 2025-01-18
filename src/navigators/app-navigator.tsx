import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavigator} from './auth-navigator';
import {TabNavigator} from './tab-navigator';
import {InitialScreen} from '@/screens';
import {colors} from '@/theme';

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
      <AppStack.Screen
        options={{statusBarBackgroundColor: colors.defaultScreenBackground}}
        name="BottomTab"
        component={TabNavigator}
      />
    </AppStack.Navigator>
  );
};
