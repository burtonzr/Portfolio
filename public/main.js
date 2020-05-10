// sticking navbar to the top of the screen on scroll
$(document).ready(function () {
    $("#header").sticky({ topSpacing: 0, zIndex: '50' });
    //scroll to top on route
    window.scrollTo(0, 0);
});

!(function($) {
    "use strict";

    // Mobile Navigation
    if($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
            class: 'mobile-nav d-lg-none'
        });

        // creating sandwich button
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        //making mobile nav active when clicked
        $(document).on('click', '.mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').toggle();
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // Real view height for mobile devices
    if(window.matchMedia("(max-width: 767px)").matches) {
        $('#hero').css({
            height: $(window).height()
        });
    }

})(jQuery);