import firebase from 'firebase/compat/app';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAuy8yDjEuNWj0C9JmjWYrKrUtHVoZisDk",
  authDomain: "nshades-51b71.firebaseapp.com",
  projectId: "nshades-51b71",
  storageBucket: "nshades-51b71.appspot.com",
  messagingSenderId: "723922562942",
  appId: "1:723922562942:web:2f4bbcfb14bc5de4600d2f",
  measurementId: "G-EPCLJD5BD2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = getAuth();
const app = initializeApp(firebaseConfig);
const provider= new GoogleAuthProvider();
export { auth, db , provider  };
