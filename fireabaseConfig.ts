import {initializeApp} from "firebase/app";
import {connectFirestoreEmulator, getFirestore} from "firebase/firestore";
// @ts-ignore
import {connectAuthEmulator, getReactNativePersistence, initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


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

const auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage)})

if (process.env.NODE_ENV === 'development') {
    connectFirestoreEmulator(db, '192.168.1.246', 8080);
    connectAuthEmulator(auth, 'http://192.168.1.246:9099');
}


export { db, auth }