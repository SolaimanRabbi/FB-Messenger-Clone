import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBTex1JodnDs_vKaGBe0nFjxcNmqkz2eok",
  authDomain: "facebook-clone-e100a.firebaseapp.com",
  databaseURL: "https://facebook-clone-e100a.firebaseio.com",
  projectId: "facebook-clone-e100a",
  storageBucket: "facebook-clone-e100a.appspot.com",
  messagingSenderId: "191794558471",
  appId: "1:191794558471:web:864b933ab2c0d32e411ca2",
  measurementId: "G-8JJKZ1VY47",
});

const db = firebase.firestore();
export default db;
