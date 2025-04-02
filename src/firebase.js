// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAejLnJiJM1a5ed6e_99Qe2sq4OcDa1ySY",
  authDomain: "fsrd-24.firebaseapp.com",
  projectId: "fsrd-24",
  storageBucket: "fsrd-24.firebasestorage.app",
  messagingSenderId: "149126515757",
  appId: "1:149126515757:web:7eee9ccbf1acc60d57fca4",
  measurementId: "G-JYKD0DE9FL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
