import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyCDey05PfkWlPNZqC7XtHZ5rDl_qcLJRAo",
  authDomain: "crop-scouting-notes-6118b.firebaseapp.com",
  databaseURL: "https://crop-scouting-notes-6118b.firebaseio.com",
  projectId: "crop-scouting-notes-6118b",
  storageBucket: "crop-scouting-notes-6118b.appspot.com",
  messagingSenderId: "40250463211",
  appId: "1:40250463211:web:a587cb0ef2a1fd5ded7fae",
});

firebase.firestore().settings({
  timestampsInSnapshots: true,
});

export default firebase;
