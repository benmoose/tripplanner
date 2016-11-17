/* @flow */
'use strict'

/*
 * Redux Trips Reducer
 */

import * as actionType from '../actions/trips';
import * as T from '../types/'

type State = {
    trips: Array<T.TripSimple>,
    loading: boolean,
    error: ?string,
}

const defaultState: State = {
    trips: [],
    loading: false,
    error: null,
};

export const tripsReducer = (state: State = defaultState, action: T.Action): State => {
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
