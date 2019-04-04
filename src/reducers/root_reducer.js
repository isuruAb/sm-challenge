import { combineReducers } from 'redux';

import  bookingsReducer  from './bookings_reducer';
import mapReducer from './map_reducer'
const rootReducer = combineReducers({
    bookings:bookingsReducer,
    map:mapReducer

});

export default rootReducer;