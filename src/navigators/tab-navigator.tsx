import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Screens from '@/screens';

export type TabParamList = {
  Home: undefined;
  Favorites: undefined;
  Cart: undefined;
  Chat: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Screens.HomeScreen} />
      <Tab.Screen name="Favorites" component={Screens.FavoritesScreen} />
      <Tab.Screen name="Cart" component={Screens.CartScreen} />
      <Tab.Screen name="Chat" component={Screens.ChatScreen} />
      <Tab.Screen name="Profile" component={Screens.ProfileScreen} />
    </Tab.Navigator>
  );
};
