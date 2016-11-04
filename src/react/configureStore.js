/*
 * Redux Store
 * */


import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import { reducer } from './reducers';


const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
    return createStore(
        reducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,   // lets us dispatch() functions
            loggerMiddleware,  // cool middleware that logs actions
        ));
}
