$(function() {

    // iPhone animation
    $('.wp .iphone').css({
        'opacity': 0
    });

    $('.wp > .iphone').each(function () {
        var $this = $(this);
        var myVal = $(this).data("value");

        $this.appear(function() {
            $('.wp > .iphone').addClass('fadeInRight');
        });
    });

    //parallax-scrolling
    $('.parallax-window').parallax();

    
    // tweets slider
    $(".tweets-slider").owlCarousel({
        singleItem:true,
        autoPlay: true,
        mouseDrag: false

    }); 

}) //end of document.ready
