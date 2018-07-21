/* Navbar */
window.onscroll = () => {
    if (window.scrollY > 0) {
        $('.main-header').addClass('scrolled')
    }
    else {
        $('.main-header').removeClass('scrolled')
    }
}

/* Banner image */
// $("#banner-slideshow > img:gt(0)").hide();

// setInterval(function() { 
//   $('#banner-slideshow > img:first')
//     .fadeOut(1500)
//     .next()
//     .fadeIn(1500)
//     .end()
//     .appendTo('#banner-slideshow');
// },  3000);

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("banner-image");
    if (x.length === 0) return;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2515);
}

/* Banner text */
$('#rotate-text').Morphext({
    animation: "fadeInUp",
    separator: ",",
    speed: 2500,
    complete: function() {}
});

/* I am a... section */
$(() => {
    $('select').selectric({
        maxHeight: 200,
        openOnHover: true
    });
})

var vowels = 'aeiou';
$(function() {
    $('.i-am-a-subtext').hide();
    $('#who-am-i-activist').show();
    $('#who-am-i-selector').on("change", function() {
        $('.i-am-a-subtext').hide();
        $('#who-am-i-'+$(this).val()).show();
        $('.i-am-a-text').text((vowels.indexOf($(this).val()[0]) !== -1) ? 'I am an' : 'I am a');
    }).val("activist");
});

