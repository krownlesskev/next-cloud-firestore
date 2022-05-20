import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBF16BaooeslwNQnWjzWUA_CFUyIUQFLvM",
    authDomain: "next-firestore-app-6eb46.firebaseapp.com",
    projectId: "next-firestore-app-6eb46",
    storageBucket: "next-firestore-app-6eb46.appspot.com",
    messagingSenderId: "915966288947",
    appId: "1:915966288947:web:c70b86111a889ac5a72f46"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);