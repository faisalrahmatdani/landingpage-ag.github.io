const hamburger_menu = document.querySelector(".hamburger-menu");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const background = document.querySelector(".links ul");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
  background.classList.toggle("bgcolor");
});
btn.addEventListener("click", () => {
  container.classList.toggle("active");
});
