import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDaXrGlw5tbj5Igh8x0C0H7cBqXad_eHK4",
  authDomain: "react-notes-26235.firebaseapp.com",
  projectId: "react-notes-26235",
  storageBucket: "react-notes-26235.appspot.com",
  messagingSenderId: "352865503784",
  appId: "1:352865503784:web:b9410057838adbb8cf431d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const notesCollection = collection(db, "notes")
