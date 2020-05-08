//Slick top carousel

$(document).ready(function () {
  $(".slider").slick({
    speed: 900,
    easing: "cubic-bezier(.93,.14,.39,.52)",
    autoplay: true,
    autoplaySpeed: 7000,
    touchThreshold: 5,
    // mobileFirst: true,
  });
});

//Slick cars

$(document).ready(function () {
  $(".multiple-items").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 900,
    easing: "ease",
    appendArrows: ".slider-arrows",
    // mobileFirst: true,
    // responsive: [
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //     },
    //   },
    // ],
  });
});

//Swiper
$(document).ready(function () {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });
});
