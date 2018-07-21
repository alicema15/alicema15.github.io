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
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2500);
}

/* Banner text */
$('#rotate-text').Morphext({
    animation: "fadeInUp",
    separator: ",",
    speed: 2500,
    complete: function() {}
});

/* Public data section */
function openSection(event, sectionId) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tab-content-c');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tab-link-c');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(sectionId).style.display = 'block';
    event.currentTarget.className += ' active';
}

document.getElementById('default-open').click();

window.onscroll = () => {
    if (window.scrollY > 0) {
        $('.main-header').addClass('scrolled')
    }
    else {
        $('.main-header').removeClass('scrolled')
    }
}

$(() => {
    $('select').selectric();
})
