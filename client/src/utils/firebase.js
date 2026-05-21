
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
   authDomain: "interview-affc2.firebaseapp.com",
  projectId: "interview-affc2",
  storageBucket: "interview-affc2.firebasestorage.app",
  messagingSenderId: "621486603701",
  appId: "1:621486603701:web:175b5fe7e477d3b55f2dfc"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}