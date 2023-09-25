// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8fgWtWGUUe8WLdyoepQRmt1fOm-1n3No",
  authDomain: "netflix-748b9.firebaseapp.com",
  projectId: "netflix-748b9",
  storageBucket: "netflix-748b9.appspot.com",
  messagingSenderId: "869185655699",
  appId: "1:869185655699:web:96096157deeed5c5cbce66",
  measurementId: "G-JZVLQ49P1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();