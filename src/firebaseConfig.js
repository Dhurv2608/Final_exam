import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyDeezY25stIyQjaV8V2AWfAc-NgZCh7Kl8",
  authDomain: "exam-2b05f.firebaseapp.com",
  projectId: "exam-2b05f",
  storageBucket: "exam-2b05f.appspot.com",
  messagingSenderId: "1003197851978",
  appId: "1:1003197851978:web:777ff9f6dd7cf7e2b5b9b3",
  measurementId: "G-1FVFSG0RXR"
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const database = getDatabase(app);
export const fireStoreDb = getFirestore(app);

