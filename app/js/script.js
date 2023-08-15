console.log("Hello, world");

const hamburgerBtn = document.querySelector(".header__toggle");
const header = document.querySelector("header");
const overlay = document.querySelector(".overlay");
const headerMenu = document.querySelector(".header__menu");
const body = document.querySelector("body");
const fadeElems = document.querySelectorAll(".has-fade");

hamburgerBtn.addEventListener("click", function () {
    // headerMenu.classList.toggle("hidden");

    if (!header.classList.contains("open")) {
        header.classList.add("open");

        fadeElems.forEach((el) => {
            el.classList.remove("fade-out");
            el.classList.add("fade-in");
        });

        body.classList.add('noscroll')

        // body.style.overflow = "hidden";
    } else {
        header.classList.remove("open");
        fadeElems.forEach((el) => {
            el.classList.remove("fade-in");
            el.classList.add("fade-out");
        });

        // body.style.overflow = "scroll";
        body.classList.remove('noscroll')
    }
});

if (header.classList.contains("open")) {
    console.log("open");
}
