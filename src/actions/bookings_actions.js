import axios from 'axios';

export function getBookings() {
    return dispatch => {
        axios.get('/bookings')
            .then(function (response) {
                // handle success
                dispatch({
                    type: "GET_BOOKINGS",
                    payload: response.data
                });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }
}
