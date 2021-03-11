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
import {store} from './config/store/store';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <Route />
      </Provider>
    </>
  );
};

export default App;
