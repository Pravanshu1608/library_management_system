import { initializeApp } from "firebase/app"; // Import Firebase
import {getAuth} from "firebase/auth"; // Import Firebase authentication

// Initialize Firebase with your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_b1t71btvNtxUoJQuveepaPJnsahC6hM",
    authDomain: "library-management-syste-7f6a7.firebaseapp.com",
    projectId: "library-management-syste-7f6a7",
    storageBucket: "library-management-syste-7f6a7.appspot.com",
    messagingSenderId: "424623460311",
    appId: "1:424623460311:web:0c7b08320b8b25ae4f8592"
  };
  
  const app=initializeApp(firebaseConfig);
  export const database=getAuth(app);