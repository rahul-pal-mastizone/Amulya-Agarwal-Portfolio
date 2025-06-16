$(window).on('load', function() {
    "use strict";
    $("#testimonial-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        pagination: true,
        navigation: false,
        slideSpeed: 1000,
        autoPlay: true
    });

});