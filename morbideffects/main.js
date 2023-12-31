document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const navBg = document.querySelector(".nav-bg");
    const navbarLinks = document.getElementById("navbarLinks");

    toggleButton.addEventListener("click", function () {
        navBg.classList.toggle("active");
        navbarLinks.classList.toggle("active");
    });
});
