import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoq-cdAYT6EWf6w4XpA3Iv-yQ-KUO1g3I",
    authDomain: "solo-travel-12ec4.firebaseapp.com",
    projectId: "solo-travel-12ec4",
    storageBucket: "solo-travel-12ec4.appspot.com",
    messagingSenderId: "76891643100",
    appId: "1:76891643100:web:a1b23a18985fbd59f3a819",
    measurementId: "G-6DW1HXXECZ",
};

// Initialize Firebase
const initAuthentication = () => {
    return initializeApp(firebaseConfig);
};
export default initAuthentication;
