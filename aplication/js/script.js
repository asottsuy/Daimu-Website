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
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        touchDrag: true,
        mouseDrag: true,

        responsive: {
            0: {
                items: 1.1,
                stagePadding: 10,

            },
            768: {
                items: 10,
                loop: false,
                nav: false,
                dots: false,
                touchDrag: false,
                mouseDrag: false
            },
            1200: {
                items: 8,
                loop: false,
                nav: false,
                dots: false,
                touchDrag: false,
                mouseDrag: false
            }
        }
    });
});