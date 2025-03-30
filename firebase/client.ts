import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD94pLEBDr3bSrWKM9Alj5eljiX6c9i10Q",
  authDomain: "interwise-789fe.firebaseapp.com",
  projectId: "interwise-789fe",
  storageBucket: "interwise-789fe.firebasestorage.app",
  messagingSenderId: "706350167872",
  appId: "1:706350167872:web:ae30583ce4aeea9b73eca5",
  measurementId: "G-D5W3NL7ZB0",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
