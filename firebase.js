import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAs4EEwBTeT63JqfAXSSwoeJtFkQEHE448",
    authDomain: "whatsapp-98.firebaseapp.com",
    projectId: "whatsapp-98",
    storageBucket: "whatsapp-98.appspot.com",
    messagingSenderId: "172166643998",
    appId: "1:172166643998:web:5aee421c043037fd4d890f"
};

const app = !firebase.apps.length
? firebase.initializeApp(firebaseConfig)
: firebase.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};
