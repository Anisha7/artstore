// create action objects
export const ADD = 'ADD'
export const REMOVE = 'REMOVE'

export const add = (id) => {
    return {
        type: ADD,
        payload: id
    }
}

export const remove = (id) => {
    return {
        type: REMOVE,
        payload: id
    }
}