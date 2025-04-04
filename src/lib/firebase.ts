
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsqYvZeIaMOCMDLf5b5p3E8IXWnTK7WlA",
  authDomain: "powerhousegym-347eb.firebaseapp.com",
  projectId: "powerhousegym-347eb",
  storageBucket: "powerhousegym-347eb.firebasestorage.app",
  messagingSenderId: "957168794632",
  appId: "1:957168794632:web:e8e1724ec9ec07ffbc65bd",
  measurementId: "G-6NXVJBM5BR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app;
