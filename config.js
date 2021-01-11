import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDJK9-LSw_y7ztKW0ZDDgNBE9LWOP6cKFI",
    authDomain: "project-71-56cc8.firebaseapp.com",
    databaseURL: "https://project-71-56cc8-default-rtdb.firebaseio.com",
    projectId: "project-71-56cc8",
    storageBucket: "project-71-56cc8.appspot.com",
    messagingSenderId: "615905555827",
    appId: "1:615905555827:web:1167e73c0d5308b50b4106"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();