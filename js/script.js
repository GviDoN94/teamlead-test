/* swiper */
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

/* timer */
const minutesVal = document.querySelector(".timer__minutes .timer__value");
const secondsVal = document.querySelector(".timer__seconds .timer__value");
const minutesText = document.querySelector(".timer__minutes .timer__text");
const secondsText = document.querySelector(".timer__seconds .timer__text");

let time = 1800;

updateTimer();
setInterval(updateTimer, 1000);

function declOfNum(number, titles) {
  cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}

function updateTimer() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  minutesVal.textContent = minutes;
  secondsVal.textContent = seconds;

  minutesText.textContent = declOfNum(minutes, ["минута", "минуты", "минут"]);
  secondsText.textContent = declOfNum(seconds, [
    "секунда",
    "секунды",
    "секунд",
  ]);
  time--;
}
