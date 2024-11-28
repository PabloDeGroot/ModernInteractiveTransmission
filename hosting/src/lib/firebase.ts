
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


let firebaseConfig = {
    apiKey: "AIzaSyBBtp0X-mJVTRHKFBMwt2_3pxIbfhhz_ak",
    authDomain: "dreamreactfirebase.firebaseapp.com",
    projectId: "dreamreactfirebase",
    storageBucket: "dreamreactfirebase.firebasestorage.app",
    messagingSenderId: "622346676045",
    appId: "1:622346676045:web:a646ed4187bc79d7443904",
    measurementId: "G-6FNYF33DY3"
  };
  let firebase = initializeApp(firebaseConfig);
  let firestore = getFirestore(firebase)
  let auth = getAuth(firebase)
  export {firebase, firestore, auth};