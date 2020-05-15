/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NativeRouter, Route} from 'react-router-native';
import Home from './src/pages/Home';
import Detail from './src/pages/Detail';

const App: () => React$Node = () => {
  return (
    <NativeRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/detail">
        <Detail />
      </Route>
    </NativeRouter>
  );
};

export default App;
