import { auth } from '../helpers/firebase'
import firebase from 'firebase';

export function userLogin() {
    return dispatch => {
        var provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            console.log("token", token);
            localStorage.setItem("token", token);
            // The signed-in user info.
            var user = result.user;
            console.log("user", user);
            // this.props.dispatch(push('/game/path'));
            dispatch({
                type: "USER_LOGIN",
                payload: user
            });

        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log({
                "error": errorMessage,
                errorCode: errorCode
            });
        });
    }
}

export function isAuthenticated(){
    return dispatch => {
        if(localStorage.getItem('token')){
            dispatch({
                type: "USER_AUTHENTICATION_CHECK",
                payload: true
            });
        }else{
            dispatch({
                type: "USER_AUTHENTICATION_CHECK",
                payload: false
            });
        }
    }
}