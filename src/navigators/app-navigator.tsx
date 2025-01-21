import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavigator} from './auth-navigator';
import {TabNavigator} from './tab-navigator';
import * as Screens from '@/screens';
import {colors} from '@/theme';

export type AppStackParamList = {
  Initial: undefined;
  Auth: undefined;
  BottomTab: undefined;
  Booking: undefined;
  BookingSuccess: undefined;
  BookingDetails: undefined;
};
const AppStack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarBackgroundColor: colors.white,
      }}>
      <AppStack.Screen name="Initial" component={Screens.InitialScreen} />
      <AppStack.Screen name="Auth" component={AuthNavigator} />
      <AppStack.Screen
        options={{statusBarBackgroundColor: colors.white}}
        name="BottomTab"
        component={TabNavigator}
      />
      <AppStack.Screen
        options={{
          headerShown: true,
          title: 'Booking',
          headerTitleAlign: 'center',
          contentStyle: {
            backgroundColor: colors.white,
          },
        }}
        name="Booking"
        component={Screens.BookingScreen}
      />
      <AppStack.Screen
        options={{
          contentStyle: {
            backgroundColor: colors.white,
          },
        }}
        name="BookingSuccess"
        component={Screens.BookingSuccessScreen}
      />
      <AppStack.Screen
        name="BookingDetails"
        component={Screens.BookingDetailsScreen}
      />
    </AppStack.Navigator>
  );
};
