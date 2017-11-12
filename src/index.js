import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers'; //Custom 'reducers' folder

import configureStore from './store/configureStore';
import DevTools from './containers/DevTools';

const store = configureStore();

const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools/>
    </div>
  </Provider>
  , document.querySelector('.container'));
