// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCysQXK6tBFtEVgGxaltHtW00jUFyO4D54",
    authDomain: "twitter-clone-dab08.firebaseapp.com",
    projectId: "twitter-clone-dab08",
    storageBucket: "twitter-clone-dab08.appspot.com",
    messagingSenderId: "754119688936",
    appId: "1:754119688936:web:62771aaae08f75dca2bf5d"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };