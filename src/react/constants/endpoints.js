/*
 * @flow
 *
 * Use this to generate endpoints.
 */


const baseUri = '/api/'
const authUri = '/auth/'

export const apiEndpoint = (...path) => {
    let path_array = path.map(item => {
        return item.replace(new RegExp('/', 'g'), '')
    });
    return `${baseUri}${path_array.join('/')}`
};

export const authEndpoint = (...path) => {
    let path_array = path.map(item => {
        return item.replace(new RegExp('/', 'g'), '')
    });
    return `${authUri}${path_array.join('/')}`
};


export const USER_GET_TOKEN = authEndpoint('token')
export const USER_DETAIL = apiEndpoint('user')

export const TRIP_LIST = apiEndpoint('trips')
export const TRIP_CREATE = apiEndpoint('trips', 'create')
export const TRIP_DETAIL = (uuid) => apiEndpoint('trips', uuid)
