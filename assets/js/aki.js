$('#rotate-text').Morphext({
    animation: "fadeInUp",
    separator: ",",
    speed: 2500,
    complete: function() {}
});

window.onscroll = () => {
    if (window.scrollY > 0) {
        $('.main-header').addClass('scrolled')
    }
    else {
        $('.main-header').removeClass('scrolled')
    }
}