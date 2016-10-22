/*
* Redux Reducers
* */

import { combineReducers } from 'redux';

import { userReducer } from './user';
import { tripsReducer } from './trips';


export const reducer = combineReducers({
    user: userReducer,
    trips: tripsReducer,
});