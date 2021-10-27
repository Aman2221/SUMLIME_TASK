import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyBWYgrwTmW2mum-FJ7QRQ_OEBNlNixyJ8Y",
    authDomain: "work-579dd.firebaseapp.com",
    databaseURL: "https://work-579dd-default-rtdb.firebaseio.com",
    projectId: "work-579dd",
    storageBucket: "work-579dd.appspot.com",
    messagingSenderId: "905614448539",
    appId: "1:905614448539:web:f4a88f6e4d02baabd5333e"
  };

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();