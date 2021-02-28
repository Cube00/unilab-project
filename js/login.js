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