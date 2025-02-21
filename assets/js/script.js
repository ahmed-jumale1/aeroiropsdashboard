document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("welcome-header");

    // Start in the center
    header.style.transform = "translate(-50%, 0)";
    header.style.opacity = "0";

    // Animate upward
    setTimeout(() => {
        header.style.transition = "transform 2s ease-out, opacity 2s ease-out";
        header.style.transform = "translate(-50%, -650%)";
        header.style.opacity = "1";
    }, 500);
});

