$(document).ready(function () {
  $("#hamburguer").on("click", function () {
    $(".nav-menu").toggleClass("is-open");

    $(this).toggleClass("is-open");
  });

  $(".nav-menu a").on("click", function () {
    if ($(".nav-menu").hasClass("is-open")) {
      $(".nav-menu").removeClass("is-open");
      $("#hamburguer").removeClass("is-open");
    }
  });

  $(".titulos .tab-title").on("click", function () {
    const $clickedTitle = $(this);
    const targetId = $clickedTitle.data("target");
    const $targetContent = $(targetId);

    if ($clickedTitle.hasClass("titulo-ativo")) {
      return;
    }

    $(".titulos .tab-title").removeClass("titulo-ativo");
    $clickedTitle.addClass("titulo-ativo");

    $(".espacos-evento .description")
      .not(targetId)
      .stop(true, true)
      .fadeOut(500);

    $targetContent.stop(true, true).css("display", "flex").hide().fadeIn(500);
  });

  $(".omakase-text").trigger("click");

  $(".fotos.owl-carousel").owlCarousel({
    margin: 10 /* Espaço horizontal entre as colunas */,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    speed: 2000,

    responsive: {
      0: {
        items: 1.2 /* Mobile: Mostra 1 coluna (2 fotos empilhadas) + pedaço da proxima */,
        stagePadding: 5,
      },
      1024: {
        items: 5 /* Desktop: 4 colunas x 2 linhas (8 fotos visíveis!) */,
      },
    },
  });
});

var hasClicked = true;

$(".mapa-button").on("click", function () {
  const $iframe = $(document.getElementsByClassName("mapa"));

  if ($(window).width() <= 768) {
    if (hasClicked) {
      $iframe.css("display", "").fadeIn(1000);
      hasClicked = false;
    } else {
      $iframe.css("display", "none").hide().fadeOut(500);
      hasClicked = true;
    }
  }
});

// Inicializando o ScrollReveal com configurações padrão
const sr = ScrollReveal({
  origin: "bottom", // De onde o elemento vem (baixo, cima, esq, dir)
  distance: "50px", // Distância que ele percorre
  duration: 1000, // Duração em ms (1 segundo)
  delay: 200, // Atraso antes de começar
  reset: false, // Se 'true', anima toda vez que rolar. 'false' anima só uma vez.
});

/* --- APLICANDO AS ANIMAÇÕES --- */

// 1. Títulos e Textos Principais (Aparecem de baixo para cima)
sr.reveal(".home-text, .titulo, .section-title");

// 2. Imagens de Destaque (Vêm da esquerda)
sr.reveal(".about-img, .left-image", {
  origin: "left",
});

// 3. Textos de Descrição (Vêm da direita)
sr.reveal(".about-text, .right-text", {
  origin: "right",
  delay: 400,
});

sr.reveal("#home, .our-story, .img-sr", {
  delay: 400,
  distance: "30px",
  duration: 1000,
});
