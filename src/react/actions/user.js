/*
* Redux User Actions
* */

import { USERDETAIL } from '../constants/endpoints';


/*
 * Action Creators
 * */

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';


/*
 * Action Creators
 * */

export function userRequest() {
    return {
        type: USER_REQUEST,
    }
}

export function userSuccess(user) {
    return {
        type: USER_SUCCESS,
        payload: {
            ...user,
        },
    }
}

export function userFailure(error) {
    return {
        type: USER_FAILURE,
        payload: {
            error: error,
        }
    }
}

export function getUser() {
    return dispatch => {
        dispatch(userRequest());

        return fetch(USERDETAIL)
            .then(response => response.json())
            .then(json => dispatch(userSuccess(json)))
            .catch(error => dispatch(userFailure(error)))
    }
}
