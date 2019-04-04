import firebase from 'firebase';

var config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "smove-c721b.firebaseapp.com",
    databaseURL: "https://smove-c721b.firebaseio.com",
    projectId: "smove-c721b",
    storageBucket: "smove-c721b.appspot.com",
    messagingSenderId: "548646881292"
  };

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();
export const storage = firebase.storage();