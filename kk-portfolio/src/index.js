import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ----------------
// ROUTING PACKAGES
// ----------------
import { BrowserRouter } from 'react-router-dom';

// --------------
// REDUX PACKAGES
// --------------
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './store/reducer/reducer';

const composeEnhancers = process.env.NODE_ENV==='development'?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null || compose;

const store = createStore(reducer, composeEnhancers());
// --------------
// OTHER PACKAGES
// --------------

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
