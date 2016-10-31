/*
* Redux User Actions
* */

import { USER_GET_TOKEN, USER_DETAIL } from '../constants/endpoints';


/*
 * Action Creators
 * */

export const USER_GET_TOKEN_REQUEST = 'USER_GET_TOKEN_REQUEST';
export const USER_GET_TOKEN_SUCCESS = 'USER_GET_TOKEN_SUCCESS';
export const USER_GET_TOKEN_FAILURE = 'USER_GET_TOKEN_FAILURE';

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';


/*
 * Action Creators
 * */


/* Get User Token */

function userGetTokenRequest() {
    return {
        type: USER_GET_TOKEN_REQUEST,
    }
}

function userGetTokenSuccess(token) {
    return {
        type: USER_GET_TOKEN_SUCCESS,
        payload: {
            ...token,
        },
    }
}

function userGetTokenFailure(error) {
    return {
        type: USER_GET_TOKEN_FAILURE,
        payload: {
            detail: error,
        },
    }
}

export function getUserToken(username, password) {
    return dispatch => {
        dispatch(userGetTokenRequest());

        return fetch(USER_GET_TOKEN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                grant_type: 'password',
                username: username,
                password: password,
            }),
        })
            .then(response => response.json())
            .then(json => dispatch(userGetTokenSuccess(json)))
            .catch(error => dispatch(userGetTokenFailure(error)))
    }
}


/* Get User Details */

function userRequest() {
    return {
        type: USER_REQUEST,
    }
}

function userSuccess(user) {
    return {
        type: USER_SUCCESS,
        payload: {
            ...user,
        },
    }
}

function userFailure(error) {
    return {
        type: USER_FAILURE,
        payload: {
            detail: error,
        }
    }
}

export function getUser() {
    return (dispatch, getState) => {
        dispatch(userRequest());

        return fetch(USER_DETAIL, {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getState().user.auth,
            }),
        })
            .then(response => response.json())
            .then(json => dispatch(userSuccess(json)))
            .catch(error => dispatch(userFailure(error)))
    }
}
