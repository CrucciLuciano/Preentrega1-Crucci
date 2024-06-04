import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCAOxULbKqB3bNBG3811oFECnOxjKMn0_A",
    authDomain: "cruccilucianoreact.firebaseapp.com",
    projectId: "cruccilucianoreact",
    storageBucket: "cruccilucianoreact.appspot.com",
    messagingSenderId: "810930883894",
    appId: "1:810930883894:web:a912492310068cba16b797"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db