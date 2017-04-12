import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router'
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const store = configureStore()


// rendering the routes and their associated component tree via index.js
ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>
  document.getElementById('main')
);
