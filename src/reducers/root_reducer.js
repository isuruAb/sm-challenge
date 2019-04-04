import { combineReducers } from 'redux';

import  bookingsReducer  from './bookings_reducer';

const rootReducer = combineReducers({
    bookings:bookingsReducer,

});

export default rootReducer;