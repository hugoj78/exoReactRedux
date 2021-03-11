import {combineReducers} from 'redux';
import token from './token';
import user from './user';
import favoris from './favoris';

export default combineReducers({
  token,
  user,
  favoris,
});
