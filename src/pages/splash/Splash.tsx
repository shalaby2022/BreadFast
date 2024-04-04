/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {ScreenNames} from '../../utils';
import {IMAGES} from '../../assets/Images';
import {styles} from './Splash.styles';
import {SplashNavigationProp} from '../../Navigation/types';

const Splash: React.FC<SplashNavigationProp> = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(ScreenNames.Home);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.contianer}>
      <Image source={IMAGES.splash} resizeMode="contain" />
    </View>
  );
};

export default Splash;
