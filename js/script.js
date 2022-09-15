const menu = document.getElementById("menu");
const exit = document.getElementById("exit");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.add("show-navbar");
});

exit.addEventListener("click", () => {
  nav.classList.remove("show-navbar");
});
