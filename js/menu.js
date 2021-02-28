const nav = document.querySelector(".nav-resp-button");
const menu = document.querySelector(".resp");

nav.addEventListener("click", () => {
    menu.classList.add("menu-active");
});
window.onclick = (event) => {
    if (event.target == menu) menu.classList.remove("menu-active");
};

const login = document.querySelector(".avatar-box");
const menuNone = document.querySelector(".menu-profile");

login.addEventListener("click", () => {
    if (document.body.offsetWidth >= 525) {
        if (!menuNone.classList.contains("active-profile")) {
            menuNone.classList.add("active-profile");
            if (menuNone.classList.contains("active-profile"))
                login.style.border = "2px solid #fa6980";
        } else {
            menuNone.classList.remove("active-profile");
            if (!menuNone.classList.contains("active-profile"))
                login.style.border = "2px solid #f6f8f9";
        }
    }
});