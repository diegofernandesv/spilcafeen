import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCm-Fo2aoVy3G8DbSBmTSTP4EdS_BVd-o0",
  authDomain: "spilcafeen-e8a10.firebaseapp.com",
  projectId: "spilcafeen-e8a10",
  storageBucket: "spilcafeen-e8a10.appspot.com",
  messagingSenderId: "969112916966",
  appId: "1:969112916966:web:ffd4e2adcb0986fa50fc27",
  measurementId: "G-2TKLL1J383"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const authProviders = auth;

export { auth, db,authProviders };