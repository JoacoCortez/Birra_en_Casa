import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyDdoxWfvGHucPx7irbwtI-SzPwdRWzpGZQ",
    authDomain: "birra-en-casa-cortez.firebaseapp.com",
    projectId: "birra-en-casa-cortez",
    storageBucket: "birra-en-casa-cortez.appspot.com",
    messagingSenderId: "215645048308",
    appId: "1:215645048308:web:680c1219cb968d663bbda1"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;