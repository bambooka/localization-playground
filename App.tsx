import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import RootNavigator from '@app/navigation/RootNavigator';

const App = () => {

  return (
    <Provider store={store()}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
    
  );
};

export default App;
