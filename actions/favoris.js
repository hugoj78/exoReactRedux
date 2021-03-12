import {store} from '../config/store/store';

export const ADD_FAVORIS = 'ADD_FAVORIS';
export const DELETE_FAVORIS = 'DELETE_FAVORIS';
export const RESET_FAVORIS = 'RESET_FAVORIS';

export const addFavoris = (value) => ({
  type: ADD_FAVORIS,
  value: value,
});

export const deleteFavoris = (value) => ({
  type: DELETE_FAVORIS,
  value: value,
});

export const resetFavoris = () => ({
  type: RESET_FAVORIS,
});
