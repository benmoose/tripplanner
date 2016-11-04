/*
 * Redux Trip Reducer
 * */

import * as actionType from '../actions/trip';


const defaultState = {
    loading: false,
    error: undefined,
    uuid: undefined,
    title: undefined,
    locations: [],
};

export const tripReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionType.TRIP_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case actionType.TRIP_SUCCESS:
            return {
                ...state,
                ...action.payload,
                loading: false,
            };
        case actionType.TRIP_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            };
    }

    return state;
};
