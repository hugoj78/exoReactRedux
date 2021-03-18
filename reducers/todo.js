import {ADD_TODO, DELETE_TODO, EDIT_TODO} from '../actions/todo';

const initialState = {
  list: [],
};

const editTodo = (payload, list) => {
  const indexOfEdit = list.map((listItem) => listItem.id).indexOf(payload.id);
  list.splice(indexOfEdit, 1, payload);
  return list;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {...state, list: [...state.list, action.payload]};
    case EDIT_TODO:
      return {...state, list: editTodo(action.payload, state.list)};
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((comment) => comment.id !== action.payload.id),
      };
    default:
      return state;
  }
};
