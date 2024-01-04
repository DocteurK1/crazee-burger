// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzf6mLzCI_q0tTHudOjxJbUAQ263g3QWA",
  authDomain: "crazee-burger-project-f99aa.firebaseapp.com",
  projectId: "crazee-burger-project-f99aa",
  storageBucket: "crazee-burger-project-f99aa.appspot.com",
  messagingSenderId: "922518896573",
  appId: "1:922518896573:web:6570ac6b90e9cb0f3d5cd4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // connection au compte firestore
export const db = getFirestore(app); // connection à la BDD
