import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX97XmvS-iSd50-7bObU3WO87kbByaigw",
  authDomain: "linkedin-clone-7201c.firebaseapp.com",
  projectId: "linkedin-clone-7201c",
  storageBucket: "linkedin-clone-7201c.appspot.com",
  messagingSenderId: "475919177392",
  appId: "1:475919177392:web:d587dd7d908a6e97c34d75",
  measurementId: "G-BTVSZ35532",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
