/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import StackNavigator from './src/Navigation/Stack';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StackNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
