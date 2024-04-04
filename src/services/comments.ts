import axios from 'axios';
import {BASE_URL} from '@env';
import {IComment} from '../store/actions/comments';

export const fetchComments = async (post_id?: number) => {
  return await axios<IComment[]>({
    method: 'GET',
    url: `${BASE_URL}/comments?post_id=${post_id}`,
  });
};
