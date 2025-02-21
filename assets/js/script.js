document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("welcome-header");

    // Set initial position (centered on page)
    header.style.transform = "translateY(0)";
    header.style.opacity = "0";

    // Animate moving all the way to the top
    setTimeout(() => {
        header.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out";
        header.style.transform = "translateY(-180%)"; // Moves header upwards
        header.style.opacity = "1";
    }, 500);
});
