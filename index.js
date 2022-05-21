const menuBtn = document.querySelector(".menu__select__btn");
const dropDownMenu = document.querySelector(".drop-down__menu");

menuBtn.addEventListener("click", () => {
  dropDownMenu.classList.toggle("hide");
});
//this eventlistner allows me to click on screen
//to also hide the menu
window.addEventListener("click", (e) => {
  if (e.target !== menuBtn) {
    dropDownMenu.classList.add("hide");
  }
});
