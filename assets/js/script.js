document.addEventListener("DOMContentLoaded", function () {
    // Populate Date Dropdown with next 7 days
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
});
