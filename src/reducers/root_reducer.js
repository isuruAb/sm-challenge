import { combineReducers } from 'redux';

import  bookingsReducer  from './bookings_reducer';
import mapReducer from './map_reducer'
import authReducer from './auth_reducers'

const rootReducer = combineReducers({
    bookings:bookingsReducer,
    map:mapReducer,
    auth:authReducer

});

export default rootReducer;