// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7K4AdX8J2238oWiptL-Pw4MtEKszeWyo",
  authDomain: "music-verse-3d15a.firebaseapp.com",
  projectId: "music-verse-3d15a",
  storageBucket: "music-verse-3d15a.appspot.com",
  messagingSenderId: "987910021005",
  appId: "1:987910021005:web:f811222bed3999421727c4",
  measurementId: "G-4EL9N9C9VN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);