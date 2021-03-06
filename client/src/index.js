
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../styles/main.css';

import rootReducer from './reducers';
import Router from './router';
import { AUTH_USER } from './actions/types';

import io from 'socket.io-client';
import ChatSocket from './services/socket';

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const socket = new ChatSocket(store.dispatch);

localStorage.getItem('token') && store.dispatch({ type: AUTH_USER });

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>
  , document.querySelector('#container'));

