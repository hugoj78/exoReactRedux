import {createStore, applyMiddleware} from 'redux';
import reducers from '../../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
let persistor = persistStore(store);
export {store, persistor};
