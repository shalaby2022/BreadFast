import {ActionTypes} from '../actionTypes';
import {IUSER, UserAction} from '../actions/users';

export interface IuserState {
  loading_users: boolean;
  users: IUSER[];
  users_error: string;
}

const initialState: IuserState = {
  loading_users: false,
  users: [],
  users_error: '',
};

export const userReducer = (
  state: IuserState = initialState,
  action: UserAction,
): IuserState => {
  switch (action.type) {
    case ActionTypes.USERS_LOADING_START:
      return {...state, loading_users: true};
    case ActionTypes.USERS_FETCHED:
      return {...state, loading_users: false, users: action.payload};
    case ActionTypes.USERS_LOADING_END:
      return {...state, loading_users: false};
    default:
      return state;
  }
};
