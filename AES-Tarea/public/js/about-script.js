$(function() {

    // rotate border
    (function() {
        var introButton = document.querySelector('.intro .middle a');
        $('.intro .middle a').hover(function() {
            $(this).siblings('div').addClass('rotating-border');
        }, function() {
            $(this).siblings('div').removeClass('rotating-border');
        })
    }());

    
    //parallax-scrolling
    $('.parallax-window').parallax();


    // testimonial slider
    $(".testimonials-1-slider").owlCarousel({
        singleItem:true,
        autoPlay: true,
        mouseDrag: false

    }); 
    

    // video
    $('.pop-video').nivoLightbox();

}) //end of document.ready
