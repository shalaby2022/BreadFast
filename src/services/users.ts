import axios from 'axios';
import {BASE_URL} from '@env';
import {IUSER} from '../store/actions/users';

export const fetchUsers = async (id?: number) => {
  const url = id ? `${BASE_URL}/users?id=${id}` : `${BASE_URL}/users`;

  return await axios<IUSER[]>({
    method: 'GET',
    url,
  });
};
