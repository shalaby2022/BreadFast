import {combineReducers} from 'redux';
import {
  homeReducer,
  commentReducer,
  userReducer,
  IhomeState,
  IcommentState,
  IuserState,
} from './reducers';
import {HomeAction} from './actions/home';
import {CommentsAction} from './actions/comments';
import {UserAction} from './actions/users';

export interface storeState {
  home: (x: IhomeState, y: HomeAction) => IhomeState;
  comment: (x: IcommentState, y: CommentsAction) => IcommentState;
  user: (x: IuserState, y: UserAction) => IuserState;
}

export const rootReducer = combineReducers<storeState>({
  home: homeReducer,
  comment: commentReducer,
  user: userReducer,
});
