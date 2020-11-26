import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCDey05PfkWlPNZqC7XtHZ5rDl_qcLJRAo",
  authDomain: "crop-scouting-notes-6118b.firebaseapp.com",
  databaseURL: "https://crop-scouting-notes-6118b.firebaseio.com",
  projectId: "crop-scouting-notes-6118b",
  storageBucket: "crop-scouting-notes-6118b.appspot.com",
  messagingSenderId: "40250463211",
  appId: "1:40250463211:web:a587cb0ef2a1fd5ded7fae",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
