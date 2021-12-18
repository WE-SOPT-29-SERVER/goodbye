import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBODkBl7RWwbU8_9U8cko3m8JQBqzoSVjo",
  authDomain: "we-sopt-29.firebaseapp.com",
  projectId: "we-sopt-29",
  storageBucket: "we-sopt-29.appspot.com",
  messagingSenderId: "570969450835",
  appId: "1:570969450835:web:7315d9ced94e3472d199a6",
  measurementId: "G-ZJ0K26WVPH",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseStorage = getStorage(firebaseApp);
export const firestore = getFirestore(firebaseApp);
