import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD0hZBVUGAiXkKbcvaDo-WgmHWwMHPzJPs",
    authDomain: "clone-608a1.firebaseapp.com",
    databaseURL: "https://clone-608a1.firebaseio.com",
    projectId: "clone-608a1",
    storageBucket: "clone-608a1.appspot.com",
    messagingSenderId: "235638699208",
    appId: "1:235638699208:web:0bee4ca71e29d6314a61fd",
    measurementId: "G-XNWG1BS2HF"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth };