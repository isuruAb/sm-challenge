const bookingsInitialState = {
    bookings: {},
}

const bookingsReducer = (state = bookingsInitialState, action) => {
    switch (action.type) {
        case "GET_BOOKINGS":
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
