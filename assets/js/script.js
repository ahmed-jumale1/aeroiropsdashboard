document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("welcome-header");
    header.style.opacity = "0"; // Start hidden

    setTimeout(() => {
        header.style.transition = "opacity 1.5s ease-in-out";
        header.style.opacity = "1"; // Fade in after 500ms
    }, 500);
});
