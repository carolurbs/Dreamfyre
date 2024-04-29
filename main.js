$(document).ready(function(){
    console.log($('.btn'))
   $('#tel').mask('(00)00000-0000');
})

$('form').on('submit',function(e){
    e.preventDefault();
    $('input').val('');
})

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaX0xUxxA4CGZi21-oTiJL6O1N5ouzCAg",
  authDomain: "site-dreamfyre.firebaseapp.com",
  projectId: "site-dreamfyre",
  storageBucket: "site-dreamfyre.appspot.com",
  messagingSenderId: "638732952802",
  appId: "1:638732952802:web:20e2404d944f6158d66abb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

