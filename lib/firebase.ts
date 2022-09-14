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
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();

// Converts milliseconds to timestamp
export const fromMillis = firebase.firestore.Timestamp.fromMillis;

// Function used to include server-generated timestamp onto a document
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export const storage = firebase.storage();

// Helper functions

/**
 * Gets a users/{uid} document from a username
 * @param {string} username
 * @returns userDoc
 */
export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
}

/**
 * Converts firestore document into JSON
 * @param {firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>} doc Post document from firestore
 * @returns {JSON} JSON serialisable document
 */
export function postToJSON(doc: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>) {
    const data = doc.data();
    if (!data) {
        return null;
    }

    return {
        ...data,
        // Turn firestore timestamp into JSON serialisable
        createdAt: data?.createdAt?.toMillis() || 0,
        updatedAt: data?.updatedAt?.toMillis() || 0,
    };
}