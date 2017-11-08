new WOW().init();
$(function(){
    $('h1').hover( 
        function() {$(this).addClass('animated jello')},
        function() {$(this).removeClass('animated jello')} 
    );
});