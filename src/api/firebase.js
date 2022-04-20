import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBZ3_BYpXYr-zfCgaGVPFu4drS8AM3JbOQ",
  authDomain: "gb-react-chat-861ef.firebaseapp.com",
  databaseURL:
    "https://gb-react-chat-861ef-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-react-chat-861ef",
  storageBucket: "gb-react-chat-861ef.appspot.com",
  messagingSenderId: "792861552935",
  appId: "1:792861552935:web:0cc0c3b5a60040daf5f902",
  measurementId: "G-4YQDS9PR15",
};

export const firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebase);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);
