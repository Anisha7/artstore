// combine reducers
import { combineReducers } from 'redux'
import cartReducer from './cartReducer';
console.log(cartReducer)
// object store
const reducers = combineReducers( {
    cart: cartReducer
})

export default reducers
