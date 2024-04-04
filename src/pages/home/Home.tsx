/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import {styles} from './Home.styles';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store/store';
import {useAppSelector} from '../../store/hooks';
import {getHomeList} from '../../store/actions/home';
import PostCard from '../../components/postCard/PostCard';
import {HomeNavigationProp} from '../../Navigation/types';

const Home: React.FC<HomeNavigationProp> = () => {
  const {loading_posts, posts, posts_error} = useAppSelector(
    state => state.home,
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeList());
  }, []);

  return (
    <View style={styles.container}>
      {loading_posts ? (
        <ActivityIndicator
          size={'large'}
          color={'#777'}
          style={styles.activityIndicator}
        />
      ) : posts_error ? (
        <Text>{posts_error}</Text>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <PostCard
              name={item.userName}
              title={item.title}
              body={item.body}
              postId={item.id}
            />
          )}
        />
      )}
    </View>
  );
};

export default Home;
