const menuButton = document.querySelector(".toggle_btn");
const MenuBar = document.querySelector(".toggle_menu");

menuButton.addEventListener("click", () => {
    MenuBar.classList.toggle("show");
});
