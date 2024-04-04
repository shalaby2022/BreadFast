import axios from 'axios';
import {BASE_URL} from '@env';
import {IPOST} from '../store/actions/home';

export const fetchPost = async (id?: number) => {
  const url = id ? `${BASE_URL}/posts?id=${id}` : `${BASE_URL}/posts`;

  return await axios<IPOST[]>({
    method: 'GET',
    url,
  });
};
