import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCm-Fo2aoVy3G8DbSBmTSTP4EdS_BVd-o0",
  authDomain: "spilcafeen-e8a10.firebaseapp.com",
  projectId: "spilcafeen-e8a10",
  storageBucket: "spilcafeen-e8a10.appspot.com",
  messagingSenderId: "969112916966",
  appId: "1:969112916966:web:ffd4e2adcb0986fa50fc27",
  measurementId: "G-2TKLL1J383",
  databaseURL: "https://spilcafeen-e8a10-default-rtdb.europe-west1.firebasedatabase.app"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getDatabase(app)
const database = getDatabase(app);

export { auth, db, database };