/*
* Redux User Reducer
* */

import * as actionType from '../actions/auth';


const defaultState = {
    isAuthenticating: false,
    isAuthenticated: !!localStorage.getItem('id_token'),
    id_token: null,
};

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionType.LOGIN_REQUEST:
            return {
                ...state,
                ...action.payload,
            };
        case actionType.LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case actionType.LOGIN_FAILURE:
            return {
                ...state,
                ...action.payload,
            };
        case actionType.LOGOUT_REQUEST:
            return {
                ...state,
                ...action.payload,
            };
        case actionType.LOGOUT_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
