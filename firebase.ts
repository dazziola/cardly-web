import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// replace this firebase conFigvariable with your own
const firebaseConfig = {
    apiKey: "AIzaSyDQVoCH26QKHxCAiAqYzBlBIyYyE8tp1F8",
    authDomain: "cardly-48854.firebaseapp.com",
    projectId: "cardly-48854",
    storageBucket: "cardly-48854.appspot.com",
    messagingSenderId: "61572234701",
    appId: "1:61572234701:web:754b9606763ac3d8631884",
    measurementId: "G-6D59TZ3LNC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
