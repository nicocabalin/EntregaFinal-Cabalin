import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHrLYbmwjMMSrlG_7bRHaP7HOLsHI4YQI",
  authDomain: "pc-comps.firebaseapp.com",
  projectId: "pc-comps",
  storageBucket: "pc-comps.appspot.com",
  messagingSenderId: "878809462812",
  appId: "1:878809462812:web:578870db55d010afb387d9",
  measurementId: "G-TZ889GKQ7R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
