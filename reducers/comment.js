import {ADD_COMMENT, DELETE_COMMENT} from '../actions/comment';

const initialState = {
  listComment: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {...state, listComment: [...state.listComment, action.value]};
    case DELETE_COMMENT:
      return {
        ...state,
        listComment: state.listComment.filter(
          (comment) => comment.id !== action.value,
        ),
      };
    default:
      return state;
  }
};
