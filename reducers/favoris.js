import {ADD_FAVORIS, DELETE_FAVORIS, IS_FAVORIS} from '../actions/favoris';

const initialState = {
  listFavoris: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORIS:
      return {...state, listFavoris: [...state.listFavoris, action.value]};
    case DELETE_FAVORIS:
      return {
        ...state,
        listFavoris: state.listFavoris.filter((fav) => fav !== action.value),
      };
    default:
      return state;
  }
};
