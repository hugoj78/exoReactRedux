import {store} from '../config/store/store';

export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const addComment = (value) => ({
  type: ADD_COMMENT,
  value: value,
});

export const deleteComment = (value) => ({
  type: DELETE_COMMENT,
  value: value,
});
