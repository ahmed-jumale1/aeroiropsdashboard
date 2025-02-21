document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("welcome-header");

    // Set initial position (centered on page)
    header.style.transform = "translate(-50%, 0)";
    header.style.opacity = "0";

    // Animate moving much further up while staying centered
    setTimeout(() => {
        header.style.transition = "transform 2s ease-out, opacity 2s ease-out";
        header.style.transform = "translate(-50%, -750%)"; // Move header WAY up
        header.style.opacity = "1";
    }, 500);
});
