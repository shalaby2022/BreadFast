import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    width: '94%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  avatarContainer: {
    marginRight: 10,
    width: 40,
    height: 40,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  commentContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 9,
    padding: 10,
    flexShrink: 1,
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
    flexShrink: 1,
  },
});
