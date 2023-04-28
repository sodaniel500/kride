import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBdPki6PS2gSnE6o5oYKrKmuCkbOrwGJ9s",
  authDomain: "chat-app-efdc6.firebaseapp.com",
  projectId: "chat-app-efdc6",
  storageBucket: "chat-app-efdc6.appspot.com",
  messagingSenderId: "558056869850",
  appId: "1:558056869850:web:8679f38c053ddd1fec3ae3",
  measurementId: "G-SB9TXEZDSE"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth()
// export { firebase }