$(function() {
    $('#home').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 500);
    });

    $(document).scroll(function() {
        const y = $(this).scrollTop();
        const elementY = $('#education').offset().top;

        if (y > elementY) {
        $('#scroll-up').fadeIn();
        } else {
        $('#scroll-up').fadeOut();
        }
    });


    $("#scroll-up").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});
