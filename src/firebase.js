
import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDs1LuyNyOmrjqxD48luhB7i80V7pTFtTY",
  authDomain: "netflix-clone-a5e57.firebaseapp.com",
  projectId: "netflix-clone-a5e57",
  storageBucket: "netflix-clone-a5e57.appspot.com",
  messagingSenderId: "524036095159",
  appId: "1:524036095159:web:199a3f1b7ae3d19c1d2132"
});

const db = getFirestore(firebaseApp);
const auth = getAuth();

console.log(db);

export {db,auth};