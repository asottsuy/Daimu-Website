$(document).ready(function() {
    $('#menu').on('click', function() {
        
        // APENAS alterna a classe no menu
        $('.nav-menu').toggleClass('is-open');
        
        // APENAS alterna a classe no ícone (opcional, para mudar a aparência)
        $(this).toggleClass('is-open'); 
    });

    // Opcional: Fechar o menu ao clicar em um link
    $('.nav-menu a').on('click', function() {
        // Remove a classe para fechar o menu com animação CSS
        if ($('.nav-menu').hasClass('is-open')) {
            $('.nav-menu').removeClass('is-open');
            $('#menu').removeClass('is-open'); // Opcional: Reseta o ícone
        }
    });
});