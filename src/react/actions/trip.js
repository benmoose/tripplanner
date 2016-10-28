/*
 * Redux Trips Actions
 * */

import { TRIP_DETAIL } from '../constants/endpoints';


/*
 * Action Creators
 * */

export const TRIP_LIST_REQUEST = 'TRIP_LIST_REQUEST';
export const TRIP_LIST_SUCCESS = 'TRIP_LIST_SUCCESS';
export const TRIP_LIST_FAILURE = 'TRIP_LIST_FAILURE';


/*
 * Action Creators
 * */

export function tripRequest() {
    return {
        type: TRIP_LIST_REQUEST,
    }
}

export function tripSuccess(trip) {
    return {
        type: TRIP_LIST_SUCCESS,
        payload: {
            ...trip,
        },
    }
}

export function tripFailure(error) {
    return {
        type: TRIP_LIST_FAILURE,
        payload: {
            error: error,
        },
    }
}

export function getTrip(uuid) {
    return (dispatch, getState) => {
        dispatch(tripRequest());

        return fetch(TRIP_DETAIL(uuid), {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + getState().user.auth,
            }),
        })
            .then(response => response.json())
            .then(json => dispatch(tripSuccess(json)))
            .catch(error => dispatch(tripFailure(error)))
    }
}
