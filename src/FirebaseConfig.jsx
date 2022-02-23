// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqu_o0CK7-rEV0EIwxr38BchQ8nlasLJA",
  authDomain: "travel-guru-52f89.firebaseapp.com",
  projectId: "travel-guru-52f89",
  storageBucket: "travel-guru-52f89.appspot.com",
  messagingSenderId: "863629036811",
  appId: "1:863629036811:web:d8f289905bbafdba00a60e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
export const auth =  getAuth(app);