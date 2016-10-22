import { store } from '../store';

import { CHANGE_NAME, CHANGE_AGE, CHANGE_USER } from '../actions/user';


store.dispatch({
    type: CHANGE_USER,
    payload: {
        name: 'Ben Hadfield',
        age: 20,
    }
});
