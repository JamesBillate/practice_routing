// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuHETjHXlkWw8_Rky2mzfn0gKDYqcQpPY",
  authDomain: "article-demo-565f0.firebaseapp.com",
  projectId: "article-demo-565f0",
  storageBucket: "article-demo-565f0.firebasestorage.app",
  messagingSenderId: "25053649113",
  appId: "1:25053649113:web:03e06af3aa8664050e46c8",
  measurementId: "G-58GMP56XJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};