import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// Needs to know about firebase app
// firebase dashboard
const firebaseConfig = {
  apiKey: "AIzaSyDlR2CGyawAHtqmqaRmnoLuNjUCIuiorpg",
  authDomain: "react-employee-manager-kp.firebaseapp.com",
  projectId: "react-employee-manager-kp",
  storageBucket: "react-employee-manager-kp.appspot.com",
  messagingSenderId: "1082682622226",
  appId: "1:1082682622226:web:9d680a660c26dc5d3573cb",
  measurementId: "G-04MC51M135"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  // const auth = firebase.auth();
  // const db = firebase.firestore();
  // const storage = firebase.storage();

  // export {auth, db, storage}

  export default firebaseApp