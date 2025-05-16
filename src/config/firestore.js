// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "first-project-871db.firebaseapp.com",
  projectId: "first-project-871db",
  storageBucket: "first-project-871db.firebasestorage.app",
  messagingSenderId: "525313501107",
  appId: "1:525313501107:web:a6fbb29b4eac90307a8dc6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
