/*
* Redux User Reducer
* */

import * as actionType from '../actions/user';


const defaultState = {
    auth: null,
    authenticating: false,

    loading: false,
    detail: null,
    full_name: undefined,
    first_name: undefined,
    last_name: undefined,
    username: undefined,
};

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionType.USER_GET_TOKEN_REQUEST:
            return {
                ...state,
                authenticating: true,
            };
        case actionType.USER_GET_TOKEN_SUCCESS:
            return {
                ...state,
                auth: action.payload.token,
                authenticating: false,
            };
        case actionType.USER_GET_TOKEN_FAILURE:
            return {
                ...state,
                ...action.payload,
                authenticating: false,
            };

        case actionType.USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case actionType.USER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                loading: false,
                detail: null,
            };
        case actionType.USER_FAILURE:
            return {
                ...state,
                ...action.payload,
                loading: false,
            };
    }

    return state;
};
