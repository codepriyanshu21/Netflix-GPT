// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-jbb6Bh-olrUqLSDjTv8L0ookPGPxVP8",
  authDomain: "netflixgpt-43d99.firebaseapp.com",
  projectId: "netflixgpt-43d99",
  storageBucket: "netflixgpt-43d99.appspot.com",
  messagingSenderId: "378415222406",
  appId: "1:378415222406:web:222bda516d1a8014804b07",
  measurementId: "G-96TCERC90T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();



