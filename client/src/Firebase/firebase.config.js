// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGVMC2XrtOeIQGRLxv_mZ9_8WyFuUFT_4",
  authDomain: "coffee-shop-c9743.firebaseapp.com",
  projectId: "coffee-shop-c9743",
  storageBucket: "coffee-shop-c9743.appspot.com",
  messagingSenderId: "1051772392656",
  appId: "1:1051772392656:web:ea918d912b752e13803ad5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
