import type {RouteProp} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackNavigationProp} from '@react-navigation/stack';

export type StackParamList = {
  Splash: undefined;
  Home: undefined;
  Post: {
    name?: string;
    title: string;
    body: string;
    postId: number;
  };
};

export type SplashNavigationProp = StackScreenProps<StackParamList, 'Splash'>;
export type HomeNavigationProp = StackScreenProps<StackParamList, 'Home'>;
export type PostCardNavigationProp = StackNavigationProp<
  StackParamList,
  'Post'
>;

export type PostScreenRouteProp = RouteProp<StackParamList, 'Post'>;
