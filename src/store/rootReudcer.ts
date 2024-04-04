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
  home: (state: IhomeState, action: HomeAction) => IhomeState;
  comment: (state: IcommentState, action: CommentsAction) => IcommentState;
  user: (state: IuserState, action: UserAction) => IuserState;
}

export const rootReducer = combineReducers<storeState>({
  home: homeReducer,
  comment: commentReducer,
  user: userReducer,
});
