/*
* Redux Reducers
* */

import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { tripsReducer } from './trips';
import { tripReducer } from './trip';


export const reducer = combineReducers({
    user: authReducer,
    trips: tripsReducer,
    trip: tripReducer,
});