import { ADD, REMOVE } from '../actions/'

// const defaultState = [0, 0, 0]
const defaultState = []
// redux will call every reducer twice with undefined state value
// thus, initialize value in function parameters
const cartReducer = (state = defaultState, action) => {
    // action object that we had in our action creator in index.js
    switch(action.type) {
        case ADD:
            if (!state.includes(action.payload)) {
                state.push(action.payload)
            }
            return state

        case REMOVE:
            const index = state.indexOf(5);
            if (index > -1) {
                state.splice(index, 1);
            }
            return state
        // if not modified
        default:
            return state
    } 
}

export default cartReducer