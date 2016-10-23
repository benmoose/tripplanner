/*
* Use this to generate endpoints.
* */


var baseUri = '/api/';

export var apiEndpoint = (...path) => {
    var path_array = path.map(item => {
        return item.replace(new RegExp('/', 'g'), '');
    });
    return `${baseUri}${path_array.join('/')}`;
};


export var USER_GET_TOKEN = apiEndpoint('api-token-auth');
export var USER_DETAIL = apiEndpoint('user');

export var TRIP_LIST = apiEndpoint('trips');
export var TRIP_DETAIL = (uuid) => apiEndpoint('trips', uuid);
