
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js';
const firebaseConfig = {
    apiKey: "AIzaSyCaX0xUxxA4CGZi21-oTiJL6O1N5ouzCAg",
    authDomain: "site-dreamfyre.firebaseapp.com",
    databaseURL: "https://site-dreamfyre-default-rtdb.firebaseio.com",
    projectId: "site-dreamfyre",
    storageBucket: "site-dreamfyre.appspot.com",
    messagingSenderId: "638732952802",
    appId: "1:638732952802:web:20e2404d944f6158d66abb"
};

const app = initializeApp(firebaseConfig);
var infoRef = firebase.database().ref('infos')

$(document).ready(function(){
    console.log($('.btn'))
   $('#tel').mask('(00)00000-0000');
})

$('form').on('submit',function(e){
    e.preventDefault();
    $('input').val('');
    
})
 function saveInfo(name, email, telephone, message)
 {
    var newInfoRef= infoRef.push();
    newInfoRef.set(
        {
            nome: name,
            email: email,
            telefone:telephone,
            mensagem: message

        }


    )

 }

