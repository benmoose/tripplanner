/*
 * Redux Trips Reducer
 * */

import * as actionType from '../actions/trips';


const defaultState = {
    loading: false,
    trips: [],
    error: null,
};

export const tripsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionType.TRIPS_LIST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case actionType.TRIPS_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                trips: action.payload.trips,
            };
        case actionType.TRIPS_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                trips: action.payload.error,
            };
    }

    return state;
};
