import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCm-Fo2aoVy3G8DbSBmTSTP4EdS_BVd-o0",
    authDomain: "spilcafeen-e8a10.firebaseapp.com",
    projectId: "spilcafeen-e8a10",
    storageBucket: "spilcafeen-e8a10.firebasestorage.app",
    messagingSenderId: "969112916966",
    appId: "1:969112916966:web:ffd4e2adcb0986fa50fc27",
    measurementId: "G-2TKLL1J383"
};

const appFirebase = initializeApp(firebaseConfig);

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);
const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const authProviders = auth;

export { auth, db, providerGoogle, providerFacebook, authProviders };