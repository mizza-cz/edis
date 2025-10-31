const sliderCategories = document.querySelector(".sliderCategories");
if (sliderCategories) {
  new Swiper(".sliderCategories", {
    slidesPerView: "auto",

    loop: false,
    speed: 700,
    navigation: {
      nextEl: ".sliderCategories__button.next",
      prevEl: ".sliderCategories__button.prev",
    },
    breakpoints: {},
  });
}
