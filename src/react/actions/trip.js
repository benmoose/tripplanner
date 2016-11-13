/*
 * @flow
 *
 * Redux Trips Actions
 */

import { authFetch } from '../utility/apiHelper'
import { TRIP_DETAIL, TRIP_CREATE } from '../constants/endpoints'


/*
 * Constants
 * */

export const TRIP_REQUEST = 'TRIP_REQUEST'
export const TRIP_SUCCESS = 'TRIP_SUCCESS'
export const TRIP_FAILURE = 'TRIP_FAILURE'

export const TRIP_CREATE_REQUEST = 'TRIP_CREATE_REQUEST'
export const TRIP_CREATE_SUCCESS = 'TRIP_CREATE_SUCCESS'
export const TRIP_CREATE_FAILURE = 'TRIP_CREATE_FAILURE'


/*
 * Actions
 * */

/* Trip */

export function tripRequest() {
    return {
        type: TRIP_REQUEST,
    }
}

export function tripSuccess(trip) {
    return {
        type: TRIP_SUCCESS,
        payload: {
            ...trip,
        },
    }
}

export function tripFailure(error) {
    return {
        type: TRIP_FAILURE,
        payload: {
            error: error,
        },
    }
}

export function getTrip(uuid) {
    return (dispatch) => {
        dispatch(tripRequest());

        return authFetch(TRIP_DETAIL(uuid))
            .then(json => dispatch(tripSuccess(json)))
            .catch(error => dispatch(tripFailure(error)));
    }
}


/* New Trip */

function tripCreateRequest() {
    return {
        type: TRIP_CREATE_REQUEST,
    }
}

function tripCreateSuccess(uuid) {
    return {
        type: TRIP_CREATE_SUCCESS,
        payload: {
            uuid: uuid,
        },
    }
}

function tripCreateFailure(error) {
    return {
        type: TRIP_CREATE_FAILURE,
        payload: {
            error: error,
        },
    }
}

export function tripCreate(title: string) {
    return dispatch => {
        dispatch(tripCreateRequest())
        return authFetch(TRIP_CREATE)
            .then(json => dispatch(tripCreateRequest(json.uuid)))
            .catch(error => dispatch(tripCreateFailure(error)))
    }
}
