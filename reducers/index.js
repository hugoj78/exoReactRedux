import {combineReducers} from 'redux';
import token from './token';
import user from './user';
import favoris from './favoris';
import comment from './comment';

export default combineReducers({
  token,
  user,
  favoris,
  comment,
});
