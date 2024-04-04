/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import {styles} from './Post.styles';
import CommentCard from '../../components/commentCard/CommentCard';
import {AppDispatch} from '../../store/store';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../store/hooks';
import {getComments} from '../../store/actions/comments';
import {IMAGES} from '../../assets/Images';
import {PostScreenRouteProp} from '../../Navigation/types';

type PostProps = {
  route: PostScreenRouteProp;
};

const Post: React.FC<PostProps> = ({route}) => {
  const {name, title, body, postId} = route.params;
  const {loading_comments, comments, comments_error} = useAppSelector(
    state => state.comment,
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(postId));
  }, []);

  return (
    <View style={styles.outerContainer}>
      {loading_comments ? (
        <ActivityIndicator />
      ) : comments_error ? (
        <Text>{comments_error}</Text>
      ) : (
        <View style={styles.container}>
          <View style={styles.postContainer}>
            <View style={styles.postAvatarAndName}>
              <Image source={IMAGES.avatar_2} style={styles.avatar} />
              <Text style={styles.userName}>{name}</Text>
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{body}</Text>
          </View>
          <View style={styles.commentsContainer}>
            <Text style={styles.commentsTitle}>Comments</Text>
            {comments?.length > 0 ? (
              <FlatList
                data={comments}
                renderItem={({item}) => <CommentCard {...item} />}
                keyExtractor={item => item.id.toString()}
              />
            ) : (
              <Text>{'No comments Yet.'}</Text>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default Post;
