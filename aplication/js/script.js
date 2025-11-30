$(document).ready(function () {
    $('#hamburguer').on('click', function () {

        $('.nav-menu').toggleClass('is-open');

        $(this).toggleClass('is-open');
    });

    $('.nav-menu a').on('click', function () {
        if ($('.nav-menu').hasClass('is-open')) {
            $('.nav-menu').removeClass('is-open');
            $('#hamburguer').removeClass('is-open');
        }
    });


    $('.titulos .tab-title').on('click', function () {
        const $clickedTitle = $(this);
        const targetId = $clickedTitle.data('target');
        const $targetContent = $(targetId);

        if ($clickedTitle.hasClass('titulo-ativo')) {
            return;
        }

        $('.titulos .tab-title').removeClass('titulo-ativo');
        $clickedTitle.addClass('titulo-ativo');

        $('.espacos-evento .description').not(targetId).stop(true, true).fadeOut(500);

        $targetContent.stop(true, true).css('display', 'flex').hide().fadeIn(500);
    });


    $('.omakase-text').trigger('click');

    $(".fotos.owl-carousel").owlCarousel({
        margin: 10,
        loop: true,
        nav: false,
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        touchDrag: true,
        mouseDrag: true,
        infinite: false,

        responsive: {
            0: {
                items: 1.1,
                stagePadding: 10,
                dots: false,

            },
            768: {
                items: 1,

            },
            1200: {
                items: 1,
            }
        }
    });
});

var hasClicked = true

$('.mapa-button').on('click', function () {
    const $iframe = $(document.getElementsByClassName('mapa'));

    if ($(window).width() <= 768) {

        if (hasClicked) {
            $iframe.css('display', '').fadeIn(1000);
            hasClicked = false
        } else {
            $iframe.css('display', 'none').hide().fadeOut(500);
            hasClicked = true
        }
    }

})