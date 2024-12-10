// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZTMjKZZ4QGJBQHZdbE0xKvwCUDwEF1Bo",
  authDomain: "netflixgpt-1c243.firebaseapp.com",
  projectId: "netflixgpt-1c243",
  storageBucket: "netflixgpt-1c243.firebasestorage.app",
  messagingSenderId: "48892918518",
  appId: "1:48892918518:web:b4675c642cebec1c9f8ad7",
  measurementId: "G-5B6FPVMDWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);