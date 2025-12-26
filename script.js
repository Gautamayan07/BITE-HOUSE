document.addEventListener("DOMContentLoaded", function () {

    // Mobile menu toggle
    const menuLinks = document.getElementById("menuLinks");
    const toggleBtn = document.getElementById("toggleBtn");

    toggleBtn.addEventListener("click", function () {
        if (menuLinks.style.display === "flex") {
            menuLinks.style.display = "none";
        } else {
            menuLinks.style.display = "flex";
        }
    });

    // Order Now scroll
    const orderBtn = document.getElementById("orderBtn");

    orderBtn.addEventListener("click", function () {
        const menuSection = document.querySelector(".menu-item");

        menuSection.scrollIntoView({
            behavior: "smooth"
        });
    });

});
