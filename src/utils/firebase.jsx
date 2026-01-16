// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH-dBMT_p9_NzD2hNRtjTXPGZbg80xx6A",
  authDomain: "gptflix1205.firebaseapp.com",
  projectId: "gptflix1205",
  storageBucket: "gptflix1205.firebasestorage.app",
  messagingSenderId: "1690780122",
  appId: "1:1690780122:web:8d2ecfda37be31287480e3",
  measurementId: "G-NX33MFR63P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Wrap analytics in try-catch to prevent app crash if analytics fails to initialize
export let analytics = null;
try {
  analytics = getAnalytics(app);
} catch (error) {
  console.warn("Firebase Analytics failed to initialize:", error);
}

export const auth = getAuth();