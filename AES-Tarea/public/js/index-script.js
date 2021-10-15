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


    // main slider
    $(".main-slider").owlCarousel({
        singleItem:true,
        autoPlay: true,
        mouseDrag: false

    }); 


    // testimonial slider
    $(".testimonials-1-slider").owlCarousel({
        singleItem:true,
        autoPlay: true,
        mouseDrag: false

    }); 


    // tweets slider
    $(".tweets-slider").owlCarousel({
        singleItem:true,
        autoPlay: true,
        mouseDrag: false

    }); 


    $('.number').each(function () {
        var $this = $(this);
        var myVal = $(this).data("value");

        $this.appear(function() {
            $('#support').animateNumber({ number: 966 }, 2000);
            $('#purchases').animateNumber({ number: 200 }, 2000);
            $('#cafe').animateNumber({ number: 1832 }, 2000);
            $('#facebook-like').animateNumber({ number: 1200 }, 2000);
            $('#tweet').animateNumber({ number: 966 }, 2000);
            $('#comments').animateNumber({ number: 1966 }, 2000);
        });
    });

    // video
    $('.popup-video').nivoLightbox();

}) //end of document.ready