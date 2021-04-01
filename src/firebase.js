import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBDNZI7JlYlVD65QNmTChUmMCac2pMEHdA",
  authDomain: "twitte-clone-a193a.firebaseapp.com",
  projectId: "twitte-clone-a193a",
  storageBucket: "twitte-clone-a193a.appspot.com",
  messagingSenderId: "437914939377",
  appId: "1:437914939377:web:1b11db6e00865438291e50",
  measurementId: "G-MP7B1YSZ5L"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;