// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAxyVq6rHenKY6dYg1NzKNCs6fW3UBvTjE',
  authDomain: 'yah2k22.firebaseapp.com',
  projectId: 'yah2k22',
  storageBucket: 'yah2k22.appspot.com',
  messagingSenderId: '829518290113',
  appId: '1:829518290113:web:31c94f160684e4c01dc840',
  measurementId: 'G-H8EH4J7NQT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
