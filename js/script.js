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
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  minutesVal.textContent = minutes;
  secondsVal.textContent = seconds;

  minutesText.textContent = declOfNum(minutes, ["Минута", "Минуты", "Минут"]);
  secondsText.textContent = declOfNum(seconds, [
    "Секунда",
    "Секунды",
    "Секунд",
  ]);
  time--;
}

/* enter only numbers */
const inputTel = (document.querySelector(".form__phone").oninput = function () {
  this.value = this.value.replace(/\D/, "");
});

/* scroll */
document.querySelectorAll(".js-scroll-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const href = this.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: "smooth",
    });
  });
});

/* just-validate */
const validation = new JustValidate(".form", {
  errorFieldCssClass: "form__input--invalid",
  errorLabelCssClass: "lable-invalid",
});

validation
  .addField(".form__name", [
    {
      rule: "required",
      errorMessage: "Введите имя",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Имя слишком короткое",
    },
    {
      rule: "maxLength",
      value: 30,
      errorMessage: "Имя слишком длинное",
    },
    {
      rule: "customRegexp",
      value: /^[a-zа-яё]+(?: [a-zа-яё]+)?$/i,
      errorMessage: "Неверный формат имени",
    },
  ])
  .addField(".form__phone", [
    {
      rule: "required",
      errorMessage: "Введите телефон",
    },
    {
      rule: "minLength",
      value: 11,
      errorMessage: "Недостаточная длина",
    },
    {
      rule: "maxLength",
      value: 11,
      errorMessage: "Превышена длина",
    },
  ]);
