/*
* Redux Store
* */

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import { reducer } from '../reducers';
import App from '../components/App';


const loggerMiddleware = createLogger();

export const store = createStore(reducer, applyMiddleware(
    thunkMiddleware,   // lets us dispatch() functions
    loggerMiddleware,  // cool middleware that logs actions
));

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('rm')
);
