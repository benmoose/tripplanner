/*
* Redux User Reducer
* */

import * as actionType from '../actions/user';


const defaultState = {
    loading: false,
    error: null,
    fullName: undefined,
    firstName: undefined,
    lastName: undefined,
    username: undefined,
};

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
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
                error: null,
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
