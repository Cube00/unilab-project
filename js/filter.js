const filter = document.querySelector(".filter");
const tool = document.querySelector(".filter-tools");
const selector = document.querySelectorAll(".cat-btn");
const block = document.querySelectorAll(".cats-filter");

filter.addEventListener("click", () => {
    tool.classList.toggle("show-tool");
    if (tool.classList.contains("show-tool"))
        filter.style.border = "1px solid #a6adb4";
    else if (!tool.classList.contains("show-tool")) {
        filter.style.border = "1px solid #ebeded";
    }
});

// selector.forEach((e) => {
//     e.addEventListener("click", () => {
//         block.forEach((j) => {
//             if (e.id === j.id) {
//                 j.classList.toggle("active-filter");
//             } else {
//                 j.classList.remove("active-filter");
//             }
//         });
//     });
// });