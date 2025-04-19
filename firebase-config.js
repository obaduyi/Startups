import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIVqCCh3f1vQSizTRhp6bBJ0HGPbG6shc",
  authDomain: "login-842d2.firebaseapp.com",
  projectId: "login-842d2",
  storageBucket: "login-842d2.appspot.com",
  messagingSenderId: "279391563772",
  appId: "1:279391563772:web:2ecfab1b26eaacc0b20c79"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
