// combine reducers
import { combineReducers } from 'redux'
import cartReducer from './cartReducer';
console.log(cartReducer)
// object store
export const reducers = combineReducers( {
    cart: cartReducer
})
