$(function() {

    // main slider
    $(".slider").owlCarousel({
        singleItem:true,
        autoPlay: true,
        mouseDrag: false

    }); 
    

    // set sidebar height
    (function() {
        var postHight = $('.blog-postes').innerHeight();
        var sidebar = document.querySelector('.sidebar');

        sidebar.style.height = postHight + 'px';
    }());
});

