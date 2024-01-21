import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzLB03g3rZCt3spZ8ppshcu7n2-FyHpEY",
  authDomain: "todos-0076.firebaseapp.com",
  projectId: "todos-0076",
  storageBucket: "todos-0076.appspot.com",
  messagingSenderId: "130752607127",
  appId: "1:130752607127:web:1cb4458bd239f5d8cd0ad2",
  measurementId: "G-BKDMDXF9Q7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)