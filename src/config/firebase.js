import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcCsxm_cXiLv4kxLbEW25fhlyapm1zGxE",
  authDomain: "react-trivia-4af17.firebaseapp.com",
  projectId: "react-trivia-4af17",
  storageBucket: "react-trivia-4af17.appspot.com",
  messagingSenderId: "43285485363",
  appId: "1:43285485363:web:beb1c9f09a707b7e881046",
  measurementId: "G-MLCFF4LDN8"
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export default db;