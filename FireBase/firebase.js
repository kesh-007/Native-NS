// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import { getFirestore } from "https://www.gstatic.com/firebasejs/9.n.n/firebase-firestore.js";
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV9seXDKjudDSUSFQmmt-kBsGz_eMoYTU",
  authDomain: "nshades-f4a8e.firebaseapp.com",
  projectId: "nshades-f4a8e",
  storageBucket: "nshades-f4a8e.appspot.com",
  messagingSenderId: "980701554371",
  appId: "1:980701554371:web:dad03833331150dceea476",
  measurementId: "G-W03D5NN949"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = firebaseApp.firestore();
const app = initializeApp(firebaseConfig);

