// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWFZ7w5Q26rTSDNFXazCOpqYOg8igO14M",
  authDomain: "summi-tech.firebaseapp.com",
  projectId: "summi-tech",
  storageBucket: "summi-tech.appspot.com",
  messagingSenderId: "1086150398625",
  appId: "1:1086150398625:web:03e08dc72d707dc8d596e0",
  measurementId: "G-44BEY045L6"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const DataBase = getFirestore(firebaseApp);  // Fixed the typo here
export const firebaseAuth = getAuth(firebaseApp);
