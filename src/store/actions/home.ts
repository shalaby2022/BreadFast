import {Dispatch} from 'redux';
import {ActionTypes} from '../actionTypes';
import {fetchPost, fetchUsers} from '../../services';
import {IUSER} from './users';

export interface IPOST {
  id: number;
  user_id: number;
  title: string;
  body: string;
  userName: string;
}

interface ListFetchingStart {
  type: ActionTypes.LIST_LOADING_START;
}

interface ListFetched {
  type: ActionTypes.LIST_FETCHED;
  payload: IPOST[];
}

interface ListFetchingEnd {
  type: ActionTypes.LIST_LOADING_END;
}

export type HomeAction = ListFetchingStart | ListFetched | ListFetchingEnd;

export const getHomeList = () => {
  return async (dispatch: Dispatch<HomeAction>) => {
    try {
      dispatch({type: ActionTypes.LIST_LOADING_START});
      const postsResponse = await fetchPost();
      const usersResponse = await fetchUsers();

      const combinedData = postsResponse?.data?.map(post => {
        const User = usersResponse?.data?.find(
          (user: IUSER) => user.id === post.user_id,
        );
        return {
          ...post,
          userName: User ? User.name : 'Unknown User',
        };
      });

      dispatch({type: ActionTypes.LIST_FETCHED, payload: combinedData});
      dispatch({type: ActionTypes.LIST_LOADING_END});
    } catch (er) {
      if (er instanceof Error) {
        dispatch({type: ActionTypes.LIST_LOADING_END, payload: er.message});
      }
    }
  };
};
