/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Route from './config/route';
import {Provider} from 'react-redux';
import {persistor, store} from './config/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Route />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
