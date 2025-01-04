// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-f6e73.firebaseapp.com",
  projectId: "taskmanager-f6e73",
  storageBucket: "taskmanager-f6e73.firebasestorage.app",
  messagingSenderId: "361771307265",
  appId: "1:361771307265:web:08db468e1bae528bd8cb00"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);