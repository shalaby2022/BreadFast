import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './PostCard.styles';
import {IMAGES} from '../../assets/Images';
import {ScreenNames} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {PostCardNavigationProp} from '../../Navigation/types';

type PostCardProp = {
  name: string;
  title: string;
  body: string;
  postId: number;
};

const PostCard: React.FC<PostCardProp> = ({name, title, body, postId}) => {
  const navigation = useNavigation<PostCardNavigationProp>();

  const onPress = (): void => {
    navigation.navigate(ScreenNames.Post, {name, title, body, postId});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.userContainer}>
        <Image source={IMAGES.avatar_2} style={styles.avatar} />
        <Text style={styles.userName}>{name}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{body}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PostCard;
