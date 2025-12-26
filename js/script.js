document.addEventListener("DOMContentLoaded", function () {

    // Mobile menu toggle
    const menuLinks = document.getElementById("menuLinks");
    const toggleBtn = document.getElementById("toggleBtn");

    if (toggleBtn && menuLinks) {
        toggleBtn.addEventListener("click", function () {
            menuLinks.style.display =
                menuLinks.style.display === "flex" ? "none" : "flex";
        });
    }

    // Order button scroll
    const orderBtn = document.getElementById("orderBtn");
    if (orderBtn) {
        orderBtn.addEventListener("click", function () {
            const menuSection = document.querySelector(".menu");
            if (menuSection) {
                menuSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

});
