// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHqrTzdenZ2vsnknueb3miN-KI1TSLBIs",
  authDomain: "promptvault-t4ba5s.firebaseapp.com",
  projectId: "promptvault-t4ba5s",
  storageBucket: "promptvault-t4ba5s.firebasestorage.app",
  messagingSenderId: "429430037731",
  appId: "1:429430037731:web:4b067f42db234f067b39d6",
  measurementId: "G-7DP2B79VJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);