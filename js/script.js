//Slick top carousel

$(document).ready(function () {
  $(".slider").slick({
    speed: 900,
    easing: "cubic-bezier(.93,.14,.39,.52)",
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnFocus: true,
    pauseOnHover: true,
    touchThreshold: 5,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
        },
      },
    ],
  });
});

//Slick cars

$(document).ready(function () {
  $(".multiple-items").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    adaptiveHeight: true,
    speed: 900,
    pauseOnFocus: true,
    pauseOnHover: true,
    easing: "ease",
    responsive: true,
    appendArrows: ".slider-arrows",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});

//Swiper
$(document).ready(function () {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    slidesPerColumn: 1,
    spaceBetween: 35,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      bulletElement: "span",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 70,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  });
});

var $paragraph = $(".footer-menu-paragraph");
$(window).resize(function () {
  if (window.innerWidth < 992) $paragraph.addClass("order-first");
  else $paragraph.removeClass("order-first");
});

var $terms = $(".footer-menu");
$(window).resize(function () {
  if (window.innerWidth < 992) $terms.addClass("order-last");
  else $terms.removeClass("order-last");
});

// Menu focus
var btn = document.getElementById("btn");
btn.addEventListener("click", function menuColorize() {
  let menu = document.getElementById("menu");
  menu.classList.toggle("colorize");
  let anotherImg = document.getElementById("white_logo");
  anotherImg.classList.toggle("white-logo-active");
  let secondImg = document.getElementById("red_logo");
  secondImg.classList.toggle("red-logo-active");
  let hamburger = document.getElementById("hamburger");
  hamburger.classList.toggle("is-active");
});

let name = document.getElementsByClassName("name-description");
let paragraph = document.getElementsByClassName("paragraph-description");
for (let i = 0; i < name.length; i++) {
  name[i].addEventListener("click", function () {
    for (let u = 0; u < paragraph.length; u++) {
      paragraph[u].classList.toggle("description-on");
    }
  });
}
