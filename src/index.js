import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppStore from './stores/AppStore';
import App from './components/App';


// Render the main component into the dom
ReactDOM.render(
  <Provider store={AppStore}>
    <App/>
  </Provider>,
document.getElementById('app'));
