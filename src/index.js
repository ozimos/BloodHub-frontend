import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import reducers from './reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const store = createStore( reducers, composeEnhancers( applyMiddleware( thunk ) ) );

const jsx = (
  <Provider store={store}>
    <StylesProvider injectFirst>
    <App />
    </StylesProvider>
  </Provider>
);

ReactDOM.render( jsx, document.getElementById( 'root' ) );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();