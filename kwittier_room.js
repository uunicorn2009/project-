
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCgsOarf9NmQbHm647X1fayYKkaA3RPzwY",
    authDomain: "kwittier-1b2df.firebaseapp.com",
    projectId: "kwittier-1b2df",
    storageBucket: "kwittier-1b2df.appspot.com",
    messagingSenderId: "677697010893",
    appId: "1:677697010893:web:e5258845f64902d0fdfd84"
  };
  
  // Initialize Firebase
  firebase. initializeApp(firebaseConfig);
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
  
        //End code
        });});}
  getData();
  