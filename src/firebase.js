import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDRUsn7ogvp-bDDU_zkZUQNxQDr5cQPz70",
    authDomain: "fha-disney-clone.firebaseapp.com",
    projectId: "fha-disney-clone",
    storageBucket: "fha-disney-clone.appspot.com",
    messagingSenderId: "1033364025257",
    appId: "1:1033364025257:web:2ab6b5396a5fb6c0f21eb8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage};
  export default db;