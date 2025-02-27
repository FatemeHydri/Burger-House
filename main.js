const menuBtn = document.getElementById("menu-btn");
const navLink = document.getElementById("nav-link");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLink.classList.toggle("open");

    const isOpen = navLink.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen?"ri-close-line":"ri-menu-line")
});

navLink.addEventListener("click", (e) => {
    navLink.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: "1000",
};
ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header-content h2", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 1000,
});  

ScrollReveal().reveal(".order-card" , {
    ...scrollRevealOption,
    interval: 500,
});
ScrollReveal().reveal(".event-content" , {
    ...scrollRevealOption,
    duration: 1000,
});