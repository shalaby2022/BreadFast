import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicator: {
    marginTop: height / 2.5,
  },
});
