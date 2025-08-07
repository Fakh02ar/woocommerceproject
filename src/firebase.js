// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYh2aBR273B_8hE8BvFLyI2mADHM__6co",
  authDomain: "my-app-1fea8.firebaseapp.com",
  projectId: "my-app-1fea8",
  storageBucket: "my-app-1fea8.appspot.com",
  messagingSenderId: "562552953029",
  appId: "1:562552953029:web:fbaf5463ed64cb411ab8ac",
  measurementId: "G-HMPVLZS9FV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
