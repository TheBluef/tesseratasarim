import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAGtGpNkfmf5E9yUsFPjMaAEMit5nY1PjI",
    authDomain: "teserra-4d6b5.firebaseapp.com",
    projectId: "teserra-4d6b5",
    storageBucket: "teserra-4d6b5.appspot.com",
    messagingSenderId: "8168533381",
    appId: "1:8168533381:web:eea089af114df7fdb528ec"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
