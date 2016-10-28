/*
* Redux Reducers
* */

import { combineReducers } from 'redux';

import { userReducer } from './user';
import { tripsReducer } from './trips';
import { tripReducer } from './trip';


export const reducer = combineReducers({
    user: userReducer,
    trips: tripsReducer,
    trip: tripReducer,
});