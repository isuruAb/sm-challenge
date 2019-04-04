import * as bookings from '../const/bookings';

const bookingsInitialState = {
    bookings: {},
}

const bookingsReducer = (state = bookingsInitialState, action) => {
    switch (action.type) {
        case bookings.GET_BOOKINGS:
            state = {
                ...state,
                bookings: action.payload,
            }
            break;
        default:
            break;

    }
    return state;
}
export default bookingsReducer;
