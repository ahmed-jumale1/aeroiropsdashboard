document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("welcome-header");

    // Set initial position (centered on page)
    header.style.transform = "translate(-50%, 0)";
    header.style.opacity = "0";

    // Animate moving even further up while staying centered
    setTimeout(() => {
        header.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out";
        header.style.transform = "translate(-50%, -250%)"; // Moves header further upwards
        header.style.opacity = "1";
    }, 500);
});
