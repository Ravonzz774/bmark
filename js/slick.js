$(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    nextArrow: document.querySelector(".slider-right-arrow"),
    prevArrow: document.querySelector(".slider-left-arrow"),
  });