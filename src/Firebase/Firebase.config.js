// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsbOfoJ4My6JtACDFH27s3MHeaJFEqRog",
  authDomain: "dragon-news-project-f0b13.firebaseapp.com",
  projectId: "dragon-news-project-f0b13",
  storageBucket: "dragon-news-project-f0b13.appspot.com",
  messagingSenderId: "176841728290",
  appId: "1:176841728290:web:6c86da0157fdc5575b857b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;