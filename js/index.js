$(function() {
    $('header').click(function() {
        let x = document.getElementById("navBar");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    });
    
    $('form input[type=submit]').click(function(e) {
        const form = $('form')[0];
        if (!form.checkValidity()) {
            return;
        }
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/vovabatsyk@gmail.com",
            method: "POST",
            data: {
                clientName: $('#client-name').val(),
                clientEemail: $('#client-email').val(),
                clientMessage: $('#client-message').val()
            },
            dataType: "json"
        }).done(function() {
            form.reset();
            $('#message-box').html('<h2>Thank you!<h2>');
        }).fail(function() {
            $('#message-box').html('Sorry, error occurred!');
        });
    });
    
    function blink() {
        $('#message-box').fadeOut('fast').fadeIn('fast')
        setTimeout(blink, 100);
    }
    blink();
    
    $('.smooth').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});
