import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView, Text} from 'react-native';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Text>Profile</Text>
    </SafeAreaView>
  );
};
