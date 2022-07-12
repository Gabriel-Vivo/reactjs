// Import la funcion de firebase
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8bdCpvBv252ooSk3yezDETOfcQCQTxK4",
  authDomain: "hamburguelandia-f6b94.firebaseapp.com",
  projectId: "hamburguelandia-f6b94",
  storageBucket: "hamburguelandia-f6b94.appspot.com",
  messagingSenderId: "1049549640606",
  appId: "1:1049549640606:web:9cd1bd41f9d51e549efc8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
