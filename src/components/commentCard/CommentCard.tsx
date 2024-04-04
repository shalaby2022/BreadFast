import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './CommentCard.styles';
import {IMAGES} from '../../assets/Images';

type CommentCardProp = {
  name: string;
  body: string;
};

const CommentCard: React.FC<CommentCardProp> = ({name, body}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={IMAGES.avatar} style={styles.avatar} />
      </View>
      <View style={styles.commentContainer}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.content}>{body}</Text>
      </View>
    </View>
  );
};

export default CommentCard;
