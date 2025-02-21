document.addEventListener("DOMContentLoaded", function () {
    // Populate Date Dropdown
    const dateSelect = document.getElementById("date-select");
    if (dateSelect) {
        const today = new Date();
        for (let i = 0; i < 7; i++) {
            let date = new Date();
            date.setDate(today.getDate() + i);
            let formattedDate = (date.getMonth() + 1) + "/" + date.getDate();
            let option = document.createElement("option");
            option.textContent = formattedDate;
            dateSelect.appendChild(option);
        }
    }
    
    // Handle Header Animation
    const header = document.getElementById("welcome-header");
    if (header) {
        header.style.transform = "translate(-50%, 0)";
        header.style.opacity = "0";

        setTimeout(() => {
            header.style.transition = "transform 2s ease-out, opacity 2s ease-out";
            header.style.transform = "translate(-50%, -650%)";
            header.style.opacity = "1";
        }, 500);
    }
});
