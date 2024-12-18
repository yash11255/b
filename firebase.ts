// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbmJ0Wbu0YHSg3xQFtiH2TBPqTqB_h974",
  authDomain: "bitovoice-91405.firebaseapp.com",
  projectId: "bitovoice-91405",
  storageBucket: "bitovoice-91405.firebasestorage.app",
  messagingSenderId: "473721507116",
  appId: "1:473721507116:web:1bc20bdace57a1a299f089",
  measurementId: "G-08JCGD47JJ"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
