/*
* Use this to generate endpoints.
* */


const baseUri = '/api/';
const authUri = '/auth/';

export var apiEndpoint = (...path) => {
    var path_array = path.map(item => {
        return item.replace(new RegExp('/', 'g'), '');
    });
    return `${baseUri}${path_array.join('/')}`;
};

export var authEndpoint = (...path) => {
    var path_array = path.map(item => {
        return item.replace(new RegExp('/', 'g'), '');
    });
    return `${authUri}${path_array.join('/')}`;
};


export var USER_GET_TOKEN = authEndpoint('token');
export var USER_DETAIL = apiEndpoint('user');

export var TRIP_LIST = apiEndpoint('trips');
export var TRIP_DETAIL = (uuid) => apiEndpoint('trips', uuid);
