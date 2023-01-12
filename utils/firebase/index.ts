import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBNUNQ4rUB3R8AByEQubyXo_FXozWm-erE',
  authDomain: 'jamrock-kitchen.firebaseapp.com',
  projectId: 'jamrock-kitchen',
  storageBucket: 'jamrock-kitchen.appspot.com',
  messagingSenderId: '783733937987',
  appId: '1:783733937987:web:011c24b6139797e314c1f6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  /* 
    Firebase function to create a user using the entered email, and password.
  */
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedListener = (callback: any) =>
  onAuthStateChanged(auth, callback);

export const signOutUser = async () => await signOut(auth);
