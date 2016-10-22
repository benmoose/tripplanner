/*
* Redux User Actions
* */


/*
 * Action Creators
 * */

export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_AGE = 'CHANGE_AGE';


/*
 * Action Creators
 * */

export function changeName(name) {
    return {
        type: CHANGE_NAME,
        payload: {
            name: name,
        },
    }
}

export function changeAge(age) {
    return {
        type: CHANGE_AGE,
        payload: {
            age: age,
        },
    }
}
