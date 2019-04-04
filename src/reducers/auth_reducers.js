const userInitialState = {
    user: '',
    authenticated: false
}

const authReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            state = {
                ...state,
                user: action.payload,
                authenticated: true

            }
            break;
        case "USER_AUTHENTICATION_CHECK":
            state = {
                ...state,
                authenticated: action.payload
            }
            break
        default:
            break;

    }
    return state;
}
export default authReducer;
