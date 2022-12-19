// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbsHAgoOz-JcSasuCftMEJ2PPx7o9j_Ws",
  authDomain: "swipewallet.firebaseapp.com",
  projectId: "swipewallet",
  storageBucket: "swipewallet.appspot.com",
  messagingSenderId: "59599980761",
  appId: "1:59599980761:web:dd9303fdc4f5965aa856c8",
  measurementId: "G-S7MN1QMGTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'page_view');