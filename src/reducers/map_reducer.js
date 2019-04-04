import * as map from '../const/map';

const mapInitialState = {
    pickup: {
        lat:1.3156247,
        lng:103.8877819
    },
    dropoff:{
        lat:1.3193483,
        lng:103.8855943
    }
}

const mapReducer = (state = mapInitialState, action) => {
    switch (action.type) {
        case map.CHANGE_MAP_DIRECTION:
            state = {
                ...state,
                pickup: {
                    lat:action.payload.pickup.lat,
                    lng:action.payload.pickup.lng
                },
                dropoff: {
                    lat:action.payload.dropoff.lat,
                    lng:action.payload.dropoff.lng
                }
            }
            break;
        default:
            break;

    }
    return state;
}
export default mapReducer;
