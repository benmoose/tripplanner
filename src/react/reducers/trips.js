/*
 * Redux Trips Reducer
 * */

import * as actionType from '../actions/trips';


const defaultState = {
    loading: false,
    error: null,
    trips: [],
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
                trips: action.payload.trips,
                loading: false,
            };
        case actionType.TRIPS_LIST_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            };
    }

    return state;
};
