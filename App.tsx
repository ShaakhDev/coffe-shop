import {AppNavigator} from '@/navigators';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
