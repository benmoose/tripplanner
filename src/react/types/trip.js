/*
* @flow
*
* Trip Types
* */


export type Trip = {
    title: string,
    get_absolute_url: string,
    locations: Array<{}>,
    created: string,
    modified: string,
}

export type TripSimple = {
    title: string,
    uuid: string,
}
