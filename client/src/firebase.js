// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is option
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: "blog-app-mern-c7a8c.firebaseapp.com",
    projectId: "blog-app-mern-c7a8c",
    storageBucket: "blog-app-mern-c7a8c.appspot.com",
    messagingSenderId: "981603283409",
    appId: "1:981603283409:web:3a2bfa63793c905319b0f0",
    measurementId: "G-1CM03X0X57",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
