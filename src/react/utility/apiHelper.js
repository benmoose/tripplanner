function _checkStatus(response) {
    // Raises an error if response status is not a success code
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export function authFetch(endpoint, custom_headers={}, method='GET', body_data={}) {
    let options = {
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...custom_headers,
        },
        method,
    };

    // if logged in, include auth header
    if (localStorage.getItem('id_token')) {
        options['headers']['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
    }

    // if body passed as arg then include it
    if(Object.keys(body_data).length !== 0) {
        options['body'] = JSON.stringify(body_data)
    }

    return fetch(endpoint, options)
        .then(_checkStatus)  // _checkStatus ensures non-200 status codes don't resolve
        .then(response => response.json());
}
