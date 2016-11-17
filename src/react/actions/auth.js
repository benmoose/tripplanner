/*
* Redux User Actions
* */


/*
 * Constants
 * */

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'


/*
 * Actions
 * */

/* Login User */

function loginRequest(credentials) {
    return {
        type: LOGIN_REQUEST,
        payload: {
            isAuthenticating: true,
            isAuthenticated: false,
            credentials,
        }
    }
}

function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            isAuthenticating: false,
            isAuthenticated: true,
            id_token: user.id_token,
        }
    }
}

function loginFailure(message) {
    return {
        type: LOGIN_FAILURE,
        payload: {
            isAuthenticating: false,
            isAuthenticated: false,
            message,
        }
    }
}

export function loginUser(credentials) {
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${credentials.username}&password=${credentials.password}`,
    };

    return dispatch => {
        dispatch(loginRequest(credentials));
        return fetch('', config)
            .then(response => response.json()
                .then(user => ({user, response})))
            .then(({user, response}) => {
                if (!response.ok) {
                    dispatch(loginFailure(user.message));
                    return Promise.reject(user);
                } else {
                    localStorage.setItem('id_token', user.id_token);
                    dispatch(loginSuccess(user));
                }
            })
            .catch(error => console.log('Error:', error));
    }
}


/* Logout User */

function logoutRequest() {
    return {
        type: LOGOUT_REQUEST,
        payload: {
            isAuthenticating: true,
            isAuthenticated: true,
        }
    }
}

function logoutSuccess() {
    return {
        type: LOGOUT_SUCCESS,
        payload: {
            isAuthenticating: false,
            isAuthenticated: false,
        }
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(logoutRequest());
        localStorage.removeItem('id_token');
        dispatch(logoutSuccess());
    }
}
