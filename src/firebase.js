// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA1rJPfbfSlCoa0Db0elpcdo0fdxK5ksnc",
    authDomain: "slack-fcd1f.firebaseapp.com",
    projectId: "slack-fcd1f",
    storageBucket: "slack-fcd1f.appspot.com",
    messagingSenderId: "522790461958",
    appId: "1:522790461958:web:05d2ac8d61509706369987",
    measurementId: "G-SQDT3KT7CN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };