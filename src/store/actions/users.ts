import {Dispatch} from 'redux';
import {ActionTypes} from '../actionTypes';
import {fetchUsers} from '../../services';

export interface IUSER {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

interface UsersFetchingStart {
  type: ActionTypes.USERS_LOADING_START;
}

interface UsersFetched {
  type: ActionTypes.USERS_FETCHED;
  payload: IUSER[];
}

interface UsersFetchingEnd {
  type: ActionTypes.USERS_LOADING_END;
}

export type UserAction = UsersFetchingStart | UsersFetched | UsersFetchingEnd;

export const getUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: ActionTypes.USERS_LOADING_START});
      const res = await fetchUsers();
      dispatch({type: ActionTypes.USERS_FETCHED, payload: res.data});
      dispatch({type: ActionTypes.USERS_LOADING_END});
    } catch (er) {
      if (er instanceof Error) {
        dispatch({type: ActionTypes.USERS_LOADING_END, payload: er.message});
      }
    }
  };
};
