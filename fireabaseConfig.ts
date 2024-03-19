import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDHS5zVWxGcW8hrSBdFy7E8_SmYLvxNVLU",
    authDomain: "oak-endurance.firebaseapp.com",
    projectId: "oak-endurance",
    storageBucket: "oak-endurance.appspot.com",
    messagingSenderId: "991152706102",
    appId: "1:991152706102:web:8b3103f1dbf932f0287e97",
    measurementId: "G-D063K6E7BS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }