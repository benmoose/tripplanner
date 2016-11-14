/*
 * @flow
 *
 * Redux Trip Reducer
 * */

import * as actionType from '../actions/trip';
import * as T from '../types/';


type State = {
    uuid: ?string,
    title: ?string,
    get_absolute_url: ?string,
    locations: Array<T.Location>,
    created: ?string,
    modified: ?string,
    loading: boolean,
    error: ?string,
}

const defaultState: State = {
    uuid: undefined,
    title: undefined,
    get_absolute_url: null,
    locations: [],
    created: null,
    modified: null,
    loading: false,
    error: null,
};

export const tripReducer = (state: State = defaultState, action: Object): State => {
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
