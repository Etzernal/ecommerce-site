import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB5mv17WxDRtdCjVnqe1GbGTya8GMOoQFQ",
    authDomain: "ecommerce-site-b884c.firebaseapp.com",
    databaseURL: "https://ecommerce-site-b884c.firebaseio.com",
    projectId: "ecommerce-site-b884c",
    storageBucket: "ecommerce-site-b884c.appspot.com",
    messagingSenderId: "667389990460",
    appId: "1:667389990460:web:a3e19d7947ef3a90dfd539",
    measurementId: "G-R2JRXVK9TX"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };