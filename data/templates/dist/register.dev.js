"use strict";

var a = 0;

function disable(e) {
  a++;
  console.log(a);
} // Set the configuration for your app
// TODO: Replace with your project's config object


var firebaseConfig = {
  apiKey: "AIzaSyDY5DXitqBzpkg2q8X67fz7ehn1d6aN9o8",
  authDomain: "notebook-3fb2f.firebaseapp.com",
  databaseURL: "https://notebook-3fb2f.firebaseio.com",
  projectId: "notebook-3fb2f",
  storageBucket: "notebook-3fb2f.appspot.com",
  messagingSenderId: "253505761685",
  appId: "1:253505761685:web:3e9e53bd2298eae00b069c"
}; // Initialize Firebase

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

function storedata(username, email, password) {
  username = document.getElementById("username");
  email = document.getElementById("email");
  password = document.getElementById("password");
  db.collection("register").doc("1").set({
    name: username,
    email: email,
    password: password
  });
}