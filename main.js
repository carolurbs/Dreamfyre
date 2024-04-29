$(document).ready(function(){
    console.log($('.btn'))
   $('#tel').mask('(00)00000-0000');
})

$('form').on('submit',function(e){
    e.preventDefault();
    $('input').val('');
})