/*
 * Redux Trips Actions
 * */

import { TRIP_LIST } from '../constants/endpoints';


/*
 * Action Creators
 * */

export const TRIPS_LIST_REQUEST = 'TRIPS_LIST_REQUEST';
export const TRIPS_LIST_SUCCESS = 'TRIPS_LIST_SUCCESS';
export const TRIPS_LIST_FAILURE = 'TRIPS_LIST_FAILURE';


/*
 * Action Creators
 * */

export function tripsRequest() {
    return {
        type: TRIPS_LIST_REQUEST,
    }
}

export function tripsSuccess(trips) {
    return {
        type: TRIPS_LIST_SUCCESS,
        payload: {
            trips: new Array(...trips),
        },
    }
}

export function tripsFailure(error) {
    return {
        type: TRIPS_LIST_FAILURE,
        payload: {
            error: error,
        },
    }
}

export function getTrips() {
    return (dispatch, getState) => {
        dispatch(tripsRequest());

        return fetch(TRIP_LIST, {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + getState().user.auth,
            }),
        })
            .then(response => response.json())
            .then(json => dispatch(tripsSuccess(json)))
            .catch(error => dispatch(tripsFailure(error)))
    }
}
