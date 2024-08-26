// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHrLYbmwjMMSrlG_7bRHaP7HOLsHI4YQI",
  authDomain: "pc-comps.firebaseapp.com",
  projectId: "pc-comps",
  storageBucket: "pc-comps.appspot.com",
  messagingSenderId: "878809462812",
  appId: "1:878809462812:web:578870db55d010afb387d9",
  measurementId: "G-TZ889GKQ7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializa Firestore y exporta la instancia
const db = getFirestore(app);
export { db };