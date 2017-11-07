new WOW().init();
$(function(){
    $('h2').hover( 
        function() {$(this).addClass('animated jello')},
        function() {$(this).removeClass('animated jello')} 
    );
});