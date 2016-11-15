/*
 * @flow
 *
 * Action Types
 */


export type Action = {
    type: string,
    payload: Object,
}

export type Dispatch = (action: Action) => void
