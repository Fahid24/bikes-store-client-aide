// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5PWsUyLQhkeuMpliZWLL1e5NcRTICIZI",
    authDomain: "my-11th-assignment-clintsite.firebaseapp.com",
    projectId: "my-11th-assignment-clintsite",
    storageBucket: "my-11th-assignment-clintsite.appspot.com",
    messagingSenderId: "166557372065",
    appId: "1:166557372065:web:9c29d02dc5334630cd2ae0",
    measurementId: "G-GWJN08V8SX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;