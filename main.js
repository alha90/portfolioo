// const hamburger = document.querySelector(".nav");
const btn = document.querySelector(".hamburger");
const showMenu = document.querySelector(".menuu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  console.log("hi");
});
btn.addEventListener("click", () => {
  showMenu.classList.toggle("open");
  console.log("hello");
});
