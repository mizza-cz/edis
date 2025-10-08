const sliderCategories = document.querySelector(".sliderCategories");
if (sliderCategories) {
  new Swiper(".sliderCategories", {
    slidesPerView: "auto",
    centeredSlides: true,

    loop: true,
    speed: 700,
    navigation: {
      nextEl: ".sliderCategories__button.next",
      prevEl: ".sliderCategories__button.prev",
    },
    breakpoints: {
      320: { centeredSlides: false },
      1440: { centeredSlides: true },
    },
  });
}
