// Select all accordion items and content panels
const items = document.querySelectorAll(".accordion-item");
const contents = document.querySelectorAll(".accordion-content");

// Add event listener to each accordion item
items.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Toggle display of the corresponding content panel
        contents[index].classList.toggle("show");

        // Close other sections
        contents.forEach((content, id) => {
            // Check if the current content panel is not the one clicked and it's currently open
            if (id !== index && content.classList.contains("show")) {
                // Remove the "show" class to close it
                content.classList.remove("show");
            }
        });
    });
});
