import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBS4576dYIOFt6RI-SAeDs_WL_73BuCnKY",
  authDomain: "e-robot-4e936.firebaseapp.com",
  projectId: "e-robot-4e936",
  storageBucket: "e-robot-4e936.firebasestorage.app",
  messagingSenderId: "118341808565",
  appId: "1:118341808565:web:24f23e7dea7510629729fc",
  measurementId: "G-JM8BFTNFYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

// Initialize Analytics conditionally
export let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {});
}

export default app;
