/**
 * Copyright (c) 2015-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */


 import React, { Component } from 'react';
 import { Provider } from 'react-redux';
 import { createStore } from 'redux';
 import App from './js/app';
 import {name as appName} from './app.json';
 var reducers = require('./js/redux/reducers');
 
 import {
   AppRegistry
 } from 'react-native';
 
 import 'react-native-get-random-values'

 let store = createStore(reducers);
 
 export default class Root extends Component {
   render() {
     return (
       <Provider store={store}>
         <App />
       </Provider>
     )
   }
 }
 
 AppRegistry.registerComponent(appName, () => Root);