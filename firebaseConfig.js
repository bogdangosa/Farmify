// Import the functions you need from the SDKs you need
import { initializeApp , getApp} from "firebase/app";
import { initializeAuth , getReactNativePersistence , getAuth, GoogleAuthProvider} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3nHzA-SIILqL-ZYr7XVKTimdGkApL-cc",
    authDomain: "farmify-3ad30.firebaseapp.com",
    projectId: "farmify-3ad30",
    storageBucket: "farmify-3ad30.appspot.com",
    messagingSenderId: "892643053491",
    appId: "1:892643053491:web:d97683e1f3a73be7dac5c6",
    measurementId: "G-J3X6TFE2T3"
  };

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP,{
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const FIREBASE_STORRAGE = getStorage(FIREBASE_APP);
const GOOGLE_PROVIDER = new GoogleAuthProvider();

export {FIREBASE_AUTH,FIREBASE_APP,FIREBASE_STORRAGE,getAuth,getApp};