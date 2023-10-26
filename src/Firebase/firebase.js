import {initializeApp} from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "AIzaSyBIUJKHaV7Toc1NiLbgtEb3mbYu-KzLDus",
    authDomain: "truelymarry-4d46f.firebaseapp.com",
    projectId: "truelymarry-4d46f",
    storageBucket: "truelymarry-4d46f.appspot.com",
    messagingSenderId: "240726906594",
    appId: "1:240726906594:web:d478110fd118f492b630bb",
    measurementId: "G-9TFXX9DLEE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export {auth, db};