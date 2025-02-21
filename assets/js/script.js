document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("welcome-header");

    // Set initial position (lower on the page)
    header.style.transform = "translateY(50px)";
    header.style.opacity = "0";

    // Animate to the top after a short delay
    setTimeout(() => {
        header.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out";
        header.style.transform = "translateY(0)"; // Move to the top
        header.style.opacity = "1";
    }, 500);
});
