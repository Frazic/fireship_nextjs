import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDmMNZCU0Q2AV1pmkGnAS1G693ma991R5A",
    authDomain: "nextfire-6a648.firebaseapp.com",
    projectId: "nextfire-6a648",
    storageBucket: "nextfire-6a648.appspot.com",
    messagingSenderId: "115672117642",
    appId: "1:115672117642:web:197f0eeaf7eaee56e05873"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();