function callApi(endpoint, authenticated = false) {
    let token = localStorage.getItem('id_token') || null;
    let config = {};

    if(authenticated) {
        if(token) {
            config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }
        } else {
            throw 'No token saved.'
        }
    }

    return fetch(endpoint, config)
        .then(response => response.text()
            .then(text => ({text, response})))
        .then(({text, response}) => {
            if(!response.ok) {
                return Promise.reject(text);
            }
            return text;
        })
        .catch(error => console.log(error));
}

export const CALL_API = Symbol('Call API');

export default store => next => action => {
    const callAPI = action[CALL_API];

    // prevent middleware being called on every action
    if(typeof callAPI === 'undefined') {
        return next(action);
    }

    let { endpoint, types, authenticated } = callAPI;
    const [ requestType, successType, errorType ] = types;

    // passing authenticated boolean back in our data lets us distinguish between protected and unprotected endpoints
    return callAPI(endpoint, authenticated)
        .then(response => next({
            response,
            authenticated,
            type: successType,
        }),
        error => next({
            error: error.message || 'There was an error.',
            type: errorType,
        }))
}
