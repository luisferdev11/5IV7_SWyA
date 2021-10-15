$(function() {
	
	// drow down menu
	$('header .navbar .dropdown').hover(function() {
	    $(this).children('ul').slideToggle('fast');
	});

	
    // back-to-top
    $('body').prepend('<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>');
    var amountScrolled = 300;

    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    });
    $('a.back-to-top').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });

});