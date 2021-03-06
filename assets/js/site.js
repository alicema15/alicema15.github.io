/* Navbar */
window.onscroll = () => {
    if (window.scrollY > 0) {
        $('.main-header').addClass('scrolled')
    }
    else {
        $('.main-header').removeClass('scrolled')
    }
}

/* Banner text */
if ($('#rotate-text').length > 0) {
    $('#rotate-text').Morphext({
        animation: "fadeInUp",
        separator: ",",
        speed: 2500,
        complete: function() {}
    });
}

$(() => {
    $('#top').load('../includes/nav.html', () => {
        /* select either the first word after the slash, or use `/` (for homepage) */
        const page = window.location.pathname.split('/')[1] || window.location.pathname;
        $(`.menu-item a[href="${page}"]`).addClass('active-item');
        $(`.dropdown-content a[href="${page}"]`).removeClass('active-item');
    });

    $('#mobile-top').load('../includes/mobile-nav.html');

    $(document).on('click', '.nav-mobile-toggle', () => {
        $('#mobile-top').toggleClass('nav-open');
    });

    $('footer').load('./includes/footer.html', function() {
        $(this).children(':first').unwrap();
    });

    /* Layers */
    $('.section-text').hide();
    $('#layer-text-default').show();

    $('.layer').on('mouseover', (event) => {
        $('.layer').addClass('faded');
        $(event.target).removeClass('faded');
        var layer = $(event.target).attr('class').match(/\d/)[0];
        $(`#stack-${layer}`).addClass('accent');
        $('.section-text').hide();
        $(`#layer-text-${layer}`).show();
    });

    $('.layer').on('mouseout', (event) => {
        $('.layer').removeClass('faded');
        $('.layer-title').removeClass('accent');
        $('.section-text').hide();
        $('#layer-text-default').show();
    });

    /* I am a... section */
    $('select').selectric({
        maxHeight: 200,
        openOnHover: true
    });

    $contactForm = $('#contact-us-form')
    
    /* contact form submit via AJAX */
    $contactForm.submit(function(e) {
        e.preventDefault();
        const $submit = $('button:submit', $contactForm);
        const $submitText = $('#submit-button-text');

        $.ajax({
            url: $contactForm.attr('action'),
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: function() {
                $submit.attr('disabled', true);
                $submitText.text('Submitting...');
            },
            success: function(data) {
                $submitText.text('Submitted!');
                $('#contact-us-form .form-input').val('');
                setTimeout(function() {
                    $submit.attr('disabled', false)
                    $submitText.text('Submit');
                }, 5000);
            },
            error: function(err) {
                $submitText.text('Oops, there was an error.');
                setTimeout(function() {
                    $submit.attr('disabled', false)
                    $submitText.text('Submit');
                }, 5000);
            }
        });
    });

})

var vowels = 'aeiou';
$(function() {
    $('.i-am-a-subtext').hide();
    $('#who-am-i-default').show();
    $('#who-am-i-selector').on("change", function() {
        $('.i-am-a-subtext').hide();
        $('#who-am-i-'+$(this).val()).show();
        $('.i-am-a-text').text((vowels.indexOf($(this).val()[0]) !== -1) ? 'I am an' : 'I am a');
    }).val("default");
});

