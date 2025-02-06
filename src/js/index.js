import "../styles/main.scss";
import emailjs from "emailjs-com";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

const button = document.querySelector(".header__btn-menu");
const body = document.querySelector("body");
const navHeader = document.querySelector(".header__list");
const menuBg = document.querySelector(".wrapper-menu");
const link = document.querySelector(".list-link");

if (button) {
  button.addEventListener("click", () => {
    body.classList.toggle("menu-active");
    menuBg?.classList.toggle("bg-decor");
    link?.classList.toggle("text-warning");
  });
}

if (navHeader) {
  navHeader.addEventListener("click", () => {
    body.classList.remove("menu-active");
  });
}

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

// const swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   effect: "fade",
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
