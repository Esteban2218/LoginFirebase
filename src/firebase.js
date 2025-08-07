import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBn6z3d_Z3ETt5lshYGT_IiRUcICyS3EZ8",
  authDomain: "maquetaperez-2ae99.firebaseapp.com",
  projectId: "maquetaperez-2ae99",
  storageBucket: "maquetaperez-2ae99.firebasestorage.app",
  messagingSenderId: "415615990789",
  appId: "1:415615990789:web:538995d82d8cc832f6706c"
};
const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db= getFirestore(app);