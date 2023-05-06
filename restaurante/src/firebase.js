import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyC9obmisMHvIHj61AFTPs5rLVzp-s5-gZc",
authDomain: "bootcamp-udd-mateo.firebaseapp.com",
projectId: "bootcamp-udd-mateo",
storageBucket: "bootcamp-udd-mateo.appspot.com",
messagingSenderId: "429628922744",
appId: "1:429628922744:web:6b52131599f3675dec868d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;



