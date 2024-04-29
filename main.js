$(document).ready(function(){
    console.log($('.btn'))
   $('#tel').mask('(00)00000-0000');
})

$('form').on('submit',function(e){
    e.preventDefault();
    var name = getInputVal('nome') 
    var email = getInputVal('email') 


    $('input').val('');
    
})

