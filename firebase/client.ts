import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5dPx8cVHrMBpZ94aMzGGUnItvuIWC51g",
  authDomain: "ai-interview-deddf.firebaseapp.com",
  projectId: "ai-interview-deddf",
  storageBucket: "ai-interview-deddf.firebasestorage.app",
  messagingSenderId: "216416595938",
  appId: "1:216416595938:web:3fda22de07f81e42d1d3bb",
  measurementId: "G-4HHPB353NX",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
