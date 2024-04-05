// Import the functions you need from the SDKs you need
import { initializeApp , getApp} from "firebase/app";
import { initializeAuth , getReactNativePersistence , getAuth} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBd56jfGZQIbS6wesQbSmhy9_88PR4pkJI",
    authDomain: "letscope-de347.firebaseapp.com",
    projectId: "letscope-de347",
    storageBucket: "letscope-de347.appspot.com",
    messagingSenderId: "423106282826",
    appId: "1:423106282826:web:7cdf9e74415913e6dfadb3",
    measurementId: "G-9MZZK0Y4CS"
  };

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP,{
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export {FIREBASE_AUTH,FIREBASE_APP,getAuth,getApp};