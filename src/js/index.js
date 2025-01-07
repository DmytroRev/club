import "../styles/main.scss";

const button = document.querySelector(".header__btn-menu");
const body = document.querySelector("body");
const navHeader = document.querySelector(".header__list");

button.addEventListener("click", () => {
  body.classList.toggle("menu-active");
});

navHeader.addEventListener("click", () => {
  body.classList.remove("menu-active");
});

