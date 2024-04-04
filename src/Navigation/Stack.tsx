import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenNames} from '../utils/constants.ts';
import Splash from '../pages/splash/Splash.tsx';
import Home from '../pages/home/Home.tsx';
import Post from '../pages/post/Post.tsx';
import {StackParamList} from './types.ts';

const Stack = createStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenNames.Splash} component={Splash} />
      <Stack.Screen name={ScreenNames.Home} component={Home} />
      <Stack.Screen
        name={ScreenNames.Post}
        component={Post}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
