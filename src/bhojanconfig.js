
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCM8H1UrgZaKAsKb_2ygTJDluYL5ZOKFoo",
  authDomain: "bhojan-95082.firebaseapp.com",
  projectId: "bhojan-95082",
  storageBucket: "bhojan-95082.appspot.com",
  messagingSenderId: "174947468233",
  appId: "1:174947468233:web:dc26983dfb49509cbf5e18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)

export default fireDB