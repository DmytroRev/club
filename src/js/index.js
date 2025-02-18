import "../styles/main.scss";
import emailjs from "emailjs-com";

const button = document.querySelector(".btn-header");
const body = document.querySelector("body");
const navHeader = document.querySelector(".header__list");
const link = document.querySelector(".list-link");
const header = document.querySelector("header");

if (button) {
  button.addEventListener("click", () => {
    body.classList.toggle("menu-active");
    link?.classList.toggle("text-warning");
  });
}

if (navHeader) {
  navHeader.addEventListener("click", () => {
    body.classList.remove("menu-active");
  });
}

function onScroll() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 50) {
    header.classList.add("sticky");
    header.classList.add('width')
  } else {
    header.classList.remove("sticky");
    header.classList.remove('width')

  }
}
window.addEventListener("scroll", onScroll);

// document.getElementById("contact-form").addEventListener("submit", (e) => {
//   e.preventDefault();

//   const status = document.getElementById("status");

//   emailjs
//     .sendForm(
//       "service_0j588gc",
//       "template_bq6jkme",
//       "#contact-form",
//       "O15zWuG0SMs10Kuy1"
//     )
//     .then(
//       () => {
//         status.textContent = "Message send!";
//         e.target.reset();
//       },
//       (error) => {
//         status.textContent = `Error send ${error.text}`;
//       }
//     );
// });

if (document.querySelector(".mySwiper")) {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 0,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
