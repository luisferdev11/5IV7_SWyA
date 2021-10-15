$(function() {

    //parallax-scrolling
    $('.parallax-window').parallax();
    

    // tweets slider
    $(".tweets-slider").owlCarousel({
        singleItem:true,
        autoPlay: true,
        mouseDrag: false

    }); 
    

    // portfolio-details-mini-slider
    $(".portfolio-details-mini-slider").owlCarousel({
        autoPlay: true,
        items: 4,
        navigation: true,
        navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        pagination: false
    });

}) //end of document.ready
