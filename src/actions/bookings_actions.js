import axios from 'axios';
import * as bookings from '../const/bookings';

export function getBookings() {
    return dispatch => {
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
            data: {},
          };
        axios.get('/bookings',config)
            .then(function (response) {
                // handle success
                dispatch({
                    type: bookings.GET_BOOKINGS,
                    payload: response.data
                });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }
}
