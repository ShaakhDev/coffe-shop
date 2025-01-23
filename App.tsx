import {AppNavigator} from '@/navigators';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {ViewStyle} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView style={$gestureHandlerRootView}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const $gestureHandlerRootView: ViewStyle = {
  flex: 1,
};

export default App;
