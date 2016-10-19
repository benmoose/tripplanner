/*
* Use this to generate endpoints.
* */


var baseUri = '/api/';

export var apiEndpoint = (...path) => {
    var path = path.map(item => {
        return item.replace(new RegExp('/', 'g'), '');
    });
    return `${baseUri}${path.join('/')}`;
};

export var TRIPLIST = apiEndpoint('trips');
export var TRIPDETAIL = (uuid) => apiEndpoint('trips', uuid);
