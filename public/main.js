// sticking navbar to the top of the screen on scroll
$(document).ready(function () {
    $("#header").sticky({ topSpacing: 0, zIndex: '50' });
    //scroll to top on route
    window.scrollTo(0, 0);
});;