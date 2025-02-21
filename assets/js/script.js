// Select all delete buttons
const deleteButtons = document.querySelectorAll(".delete-btn");

// Add event listener to each button
deleteButtons.forEach(button => {
    button.addEventListener("click", function() {
        const row = this.parentElement.parentElement;
        row.remove(); // Remove the row from the table
    });
});
