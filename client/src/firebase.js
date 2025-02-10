// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-5742b.firebaseapp.com",
  projectId: "mern-auth-5742b",
  storageBucket: "mern-auth-5742b.firebasestorage.app",
  messagingSenderId: "315857828862",
  appId: "1:315857828862:web:1ac08da86a270e7fd59eaf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);