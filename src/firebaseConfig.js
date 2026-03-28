// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1y2gW_wCkTwS2hCTdJGUm70IQkJUOTiU",
  authDomain: "simple-lab-activity.firebaseapp.com",
  projectId: "simple-lab-activity",
  storageBucket: "simple-lab-activity.firebasestorage.app",
  messagingSenderId: "191144178461",
  appId: "1:191144178461:web:bbe80c8f3e2a55f51627f4",
  measurementId: "G-ZHGW4GX1QJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);