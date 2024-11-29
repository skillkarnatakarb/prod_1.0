// frontend/src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8Vol9bMRvM6TsSl4SJ2pMi1eeLnUSs-0",
  authDomain: "skillkarnataka-2d1fa.firebaseapp.com",
  projectId: "skillkarnataka-2d1fa",
  storageBucket: "skillkarnataka-2d1fa.appspot.com",
  messagingSenderId: "18912631105",
  appId: "1:18912631105:web:f3d4a1b85ee063924ca9c0",
  measurementId: "G-S26TG4VF9P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
