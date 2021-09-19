// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5x4pMkpnVGPZftVoKf0Mc_ZVpzMrm9rI",
  authDomain: "blenderco-5ef40.firebaseapp.com",
  databaseURL: "https://blenderco-5ef40-default-rtdb.firebaseio.com",
  projectId: "blenderco-5ef40",
  storageBucket: "blenderco-5ef40.appspot.com",
  messagingSenderId: "561193143117",
  appId: "1:561193143117:web:4b4b3fe670a058ccd10504",
  measurementId: "G-JCV7CWXFTJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
