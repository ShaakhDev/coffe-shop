import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import * as Screens from '@/screens';
import {renderTabBarIcon, renderTabBarLabel} from './navigation-utils';
import {BagIcon, ChatIcon, HeartIcon, HomeIcon, ProfileIcon} from '@/icons';
import {colors} from '@/theme';

export type TabParamList = {
  Home: undefined;
  Favorites: undefined;
  Cart: undefined;
  Chat: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

type TTabOptions = {
  [key in keyof TabParamList]?: BottomTabNavigationOptions;
};

const TabScreenOptions: TTabOptions = {
  Home: {
    tabBarIcon: ({focused}) => renderTabBarIcon(HomeIcon, focused),
    headerShown: false,
  },
  Favorites: {
    tabBarIcon: ({focused}) => renderTabBarIcon(HeartIcon, focused),
    title: 'Favorites',
  },
  Cart: {
    tabBarIcon: ({focused}) => renderTabBarIcon(BagIcon, focused),
    title: 'Your cart',
  },
  Chat: {
    tabBarIcon: ({focused}) => renderTabBarIcon(ChatIcon, focused),
  },
  Profile: {
    headerShown: false,
    tabBarIcon: ({focused}) => renderTabBarIcon(ProfileIcon, focused),
  },
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 75,
          paddingTop: 10,
        },
        tabBarHideOnKeyboard: true,
        sceneStyle: {
          backgroundColor: colors.defaultScreenBackground,
        },
        headerTitleAlign: 'center',
        tabBarLabel: renderTabBarLabel,
      }}>
      <Tab.Screen
        options={TabScreenOptions.Home}
        name="Home"
        component={Screens.HomeScreen}
      />
      <Tab.Screen
        options={TabScreenOptions.Favorites}
        name="Favorites"
        component={Screens.FavoritesScreen}
      />
      <Tab.Screen
        options={TabScreenOptions.Cart}
        name="Cart"
        component={Screens.CartScreen}
      />
      <Tab.Screen
        options={TabScreenOptions.Chat}
        name="Chat"
        component={Screens.ChatScreen}
      />
      <Tab.Screen
        options={TabScreenOptions.Profile}
        name="Profile"
        component={Screens.ProfileScreen}
      />
    </Tab.Navigator>
  );
};
