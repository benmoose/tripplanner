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

export function authFetch(endpoint, custom_headers={}) {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };

    // if logged in, include auth header
    if (localStorage.getItem('id_token')) {
        headers['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
    }

    return fetch(endpoint, {
        'headers': Object.assign(headers, custom_headers),
    })
        .then(_checkStatus)  // _checkStatus ensures non-200 status codes don't resolve
        .then(response => response.json());
}
