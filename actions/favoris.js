import {store} from '../config/store/store';

export const ADD_FAVORIS = 'ADD_FAVORIS';
export const DELETE_FAVORIS = 'DELETE_FAVORIS';

export const addFavoris = (value) => ({
  type: ADD_FAVORIS,
  value: value,
});

export const deleteFavoris = (value) => ({
  type: DELETE_FAVORIS,
  value: value,
});

export const isFavoris = (value) => (dispatch) => {
  const favoris = store.getState().favoris.listFavoris;
  if (favoris) {
    return favoris.includes(value);
  } else {
    return false;
  }
};
