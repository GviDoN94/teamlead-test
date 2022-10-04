const swiper = new Swiper(".swiper", {
  slidesPerGroup: 1,
  slidesPerView: 1,
  spaceBetween: 34,
  loop: true,
  navigation: {
    prevEl: ".swiper__btn-prev",
    nextEl: ".swiper__btn-next",
  },
  a11y: {
    firstSlideMessage: "Это первый слайд",
    lastSlideMessage: "Это последний слайд",
    nextSlideMessage: "Следующий слайд",
    prevSlideMessage: "Предыдущий слайд",
  },
});