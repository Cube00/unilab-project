const nav = document.querySelector(".nav-resp-button");
const menu = document.querySelector(".resp");

nav.addEventListener("click", () => {
    menu.classList.add("menu-active");
});
window.onclick = (event) => {
    console.log(event.target);
    if (event.target == menu) {
        menu.classList.remove("menu-active");
    }
};