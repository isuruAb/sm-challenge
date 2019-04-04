import * as authconst from '../const/auth';

const userInitialState = {
    user: '',
    authenticated: false
}

const authReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case authconst.USER_LOGIN:
            state = {
                ...state,
                user: action.payload,
                authenticated: true

            }
            break;
        case authconst.USER_AUTHENTICATION_CHECK:
            state = {
                ...state,
                authenticated: action.payload
            }
            break
        case authconst.USER_LOGOUT:
            state = {
                ...state,
                user:'',
                authenticated: false
            }
            break;
        default:
            break;

    }
    return state;
}
export default authReducer;
