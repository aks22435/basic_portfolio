$(document).ready(function(){

    $('menu').click(function(){
    $(this).toggleClass('fa-Times');
    $('header').toggleClass('toggle');
    });

    $(window).on('scroll load' ,function(){
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');
    });
    
});
