import {ActionTypes} from '../actionTypes';
import {HomeAction, IPOST} from '../actions/home';

export interface IhomeState {
  loading_posts: boolean;
  posts: IPOST[];
  posts_error: string;
}

const initialState: IhomeState = {
  loading_posts: false,
  posts: [],
  posts_error: '',
};

export const homeReducer = (
  state: IhomeState = initialState,
  action: HomeAction,
): IhomeState => {
  switch (action.type) {
    case ActionTypes.LIST_LOADING_START:
      return {...state, loading_posts: true};
    case ActionTypes.LIST_FETCHED:
      return {...state, loading_posts: false, posts: action.payload};
    case ActionTypes.LIST_LOADING_END:
      return {...state, loading_posts: false};
    default:
      return state;
  }
};
