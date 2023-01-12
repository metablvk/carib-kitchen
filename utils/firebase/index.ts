import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  UserCredential,
} from 'firebase/auth';
import {
  getFirestore,
  addDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { totalmem } from 'os';
import { CartItem } from '../../store/cart/cart.types';

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
export const db = getFirestore();

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential | void> => {
  /* 
    Firebase function to create a user using the entered email, and password.
  */
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential | void> => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedListener = (callback: any) =>
  onAuthStateChanged(auth, callback);

export const createOrder = async (
  cartItems: CartItem[],
  uid: string,
  total: number
) => {
  const d = new Date();
  const docRef = await addDoc(collection(db, 'order'), {
    items: [...cartItems],
    uid: uid,
    finalTotal: total,
    dateOrdered: d.toISOString().slice(0, 10),
  });
  return docRef.id;
};

export const getAllOrders = async (uid: string) => {
  const q = query(collection(db, 'order'), where('uid', '==', uid));

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const signOutUser = async (): Promise<void> => await signOut(auth);
