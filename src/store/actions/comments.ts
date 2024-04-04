import {Dispatch} from 'redux';
import {ActionTypes} from '../actionTypes';
import {fetchComments} from '../../services';

export interface IComment {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentsFetchingStart {
  type: ActionTypes.COMMENTS_LOADING_START;
}

interface CommentsFetched {
  type: ActionTypes.COMMENTS_FETCHED;
  payload: IComment[];
}

interface CommentsFetchingEnd {
  type: ActionTypes.COMMENTS_LOADING_END;
}

export type CommentsAction =
  | CommentsFetchingStart
  | CommentsFetched
  | CommentsFetchingEnd;

export const getComments = (post_id?: number) => {
  return async (dispatch: Dispatch<CommentsAction>) => {
    try {
      dispatch({type: ActionTypes.COMMENTS_LOADING_START});
      const res = await fetchComments(post_id);
      dispatch({type: ActionTypes.COMMENTS_FETCHED, payload: res.data});
      dispatch({type: ActionTypes.COMMENTS_LOADING_END});
    } catch (er) {
      if (er instanceof Error) {
        dispatch({type: ActionTypes.COMMENTS_LOADING_END, payload: er.message});
      }
    }
  };
};
