import {ActionTypes} from '../actionTypes';
import {CommentsAction, IComment} from '../actions/comments';

export interface IcommentState {
  loading_comments: boolean;
  comments: IComment[];
  comments_error: string;
}

const initialState = {
  loading_comments: false,
  comments: [],
  comments_error: '',
};

export const commentReducer = (
  state: IcommentState = initialState,
  action: CommentsAction,
): IcommentState => {
  switch (action.type) {
    case ActionTypes.COMMENTS_LOADING_START:
      return {...state, loading_comments: true};
    case ActionTypes.COMMENTS_FETCHED:
      return {...state, loading_comments: false, comments: action.payload};
    case ActionTypes.COMMENTS_LOADING_END:
      return {...state, loading_comments: false};
    default:
      return state;
  }
};
