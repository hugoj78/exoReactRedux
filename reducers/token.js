import {INCREMENT_TOKEN} from '../actions/token';

const initialState = {
  token: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_TOKEN:
      return {...state, token: state.token};
    default:
      return state;
  }
};
