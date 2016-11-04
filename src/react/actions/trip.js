/*
 * Redux Trips Actions
 * */

import { authFetch } from '../utility/apiHelper';
import { TRIP_DETAIL } from '../constants/endpoints';


/*
 * Action Creators
 * */

export const TRIP_REQUEST = 'TRIP_REQUEST';
export const TRIP_SUCCESS = 'TRIP_SUCCESS';
export const TRIP_FAILURE = 'TRIP_FAILURE';


/*
 * Action Creators
 * */

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

// export function getTrip(uuid) {
//     return (dispatch, getState) => {
//         dispatch(tripRequest());
//
//         return fetch(TRIP_DETAIL(uuid), {
//             method: 'GET',
//             headers: new Headers({
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + localStorage.getItem('id_token'),
//             }),
//         })
//             .then(response => response.json())
//             .then(json => dispatch(tripSuccess(json)))
//             .catch(error => dispatch(tripFailure(error)))
//     }
// }

export function getTrip(uuid) {
    return (dispatch) => {
        dispatch(tripRequest());

        return authFetch(TRIP_DETAIL(uuid))
            .then(json => dispatch(tripSuccess(json)))
            .catch(error => dispatch(tripFailure(error)));
    }
}
