import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB13bXNVNYCE6SikdUDlbokAoi6Xx7e4Zs",
    authDomain: "form-try-8b548.firebaseapp.com",
    projectId: "form-try-8b548",
    storageBucket: "form-try-8b548.firebasestorage.app",
    messagingSenderId: "854612754608",
    appId: "1:854612754608:web:128333fc2afc57fa1b7b75",
    measurementId: "G-W6SMCBRLTP"
  };

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);  
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(name, email, message);

    saveMessage(name, email, message);

    // document.getElementById('contactForm').reset();
}

function saveMessage(name, email, message) {
    const messageRef = ref(database, 'messages'); 
    const newMessageRef = push(messageRef);  

    set(newMessageRef, {
        name: name,
        email: email,
        message: message
    })
    .then(() => {
        alert("Message submitted");
    })
    .catch((error) => {
        console.error("Error: ", error);
        alert("Try again.");
    });
}