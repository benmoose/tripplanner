/*
* Redux User Reducer
* */

import * as actionType from '../actions/user';


const defaultState = {
    name: undefined,
    age: undefined,
};

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionType.CHANGE_USER:
            return {
                ...state,
                ...action.payload,
            };
        case actionType.CHANGE_NAME:
            return {
                ...state,
                name: action.payload.name,
            };
        case actionType.CHANGE_AGE:
            return {
                ...state,
                age: action.payload.age,
            };
    }

    return state;
};
