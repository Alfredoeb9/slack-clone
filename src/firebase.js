import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA3rWPRlyXTcKVBeeJMjYPfbM3R4qZBf_s",
  authDomain: "slack-clone-e0e94.firebaseapp.com",
  databaseURL: "https://slack-clone-e0e94.firebaseio.com",
  projectId: "slack-clone-e0e94",
  storageBucket: "slack-clone-e0e94.appspot.com",
  messagingSenderId: "776950115531",
  appId: "1:776950115531:web:9d64420797a1b4131fbf4e",
  measurementId: "G-1FXBN7RR4L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// allows us to access our database from any place
const db = firebaseApp.firestore();
// Login page
const auth = firebase.auth();
// Use google auth app
const provider = new firebase.auth.GoogleAuthProvider();

// import { auth, provider } from './firebase';
export { auth, provider };
// import db from './firebase';
export default db;