// Select arrow icons
const arrowIcons = document.querySelectorAll(".arrow-icon-container i");

// Select tab container and tabs
const tabContainer = document.querySelector(".tab-container");
const allTabs = tabContainer.querySelectorAll(".tab");

// Variable to track dragging state
let isDragging = false;

// Function to handle arrow icons visibility based on scroll position
const handleIcons = (scrollValue) => {
    // Calculate maximum scrollable width
    let maxScrollableWidth = tabContainer.scrollWidth - tabContainer.clientWidth;
    // Show/hide left arrow icon based on scroll position
    arrowIcons[0].parentElement.style.display = scrollValue <= 0 ? "none" : "flex";
    // Show/hide right arrow icon based on scroll position
    arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollValue <= 1 ? "none" : "flex";
}

// Event listener for arrow icons
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // Update scroll position based on clicked icon
        let scrollWidth = tabContainer.scrollLeft += icon.id === "left" ? -300 : 300;
        handleIcons(scrollWidth); // Update arrow icons visibility
    });
});

// Event listener for tab clicks
allTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Toggle active class on tabs
        tabContainer.querySelector(".active").classList.remove("active"); // Remove active class from previously active tab
        tab.classList.add("active"); // Add active class to clicked tab
    });
});

// Function to start the dragging
const dragStartEvent = () => {
    isDragging = true; // Set dragging state to true
}

// Function to handle the dragging
const draggingEvent = (e) => {
    if (!isDragging) return; // Exit if not dragging
    tabContainer.classList.add("dragging"); // Add dragging class to tab container
    tabContainer.scrollLeft -= e.movementX; // Adjust scroll position based on mouse movement
    handleIcons(tabContainer.scrollLeft); // Update arrow icons visibility
}

// Function to stop the dragging
const dragStopEvent = () => {
    isDragging = false; // Set dragging state to false
    tabContainer.classList.remove("dragging"); // Remove dragging class from tab container
}

// Event listeners for mouse events
tabContainer.addEventListener("mousedown", dragStartEvent); // Start dragging on mouse down
tabContainer.addEventListener("mousemove", draggingEvent); // Update dragging behavior on mouse move
document.addEventListener("mouseup", dragStopEvent); // Stop dragging on mouse up

/*
    Certainly! Let's consider an example to explain the code with some sample values.

    Suppose we have a `tabContainer` that contains a list of tabs, and we also have left and right arrow icons for scrolling through these tabs horizontally.

    - `tabContainer`: Width of 800 pixels.
    - `scrollWidth`: Total width of all tabs, let's say 1200 pixels.
    - `clientWidth`: Width of the visible portion of the `tabContainer`, let's say 800 pixels.
    - `scrollLeft`: Current scroll position within the `tabContainer`, initially set to 0 pixels.

    Now, let's go through the code step by step:

    1. **Function to handle arrow icons visibility based on scroll position**:
    - `handleIcons(scrollVal)`: This function takes the current `scrollVal` as an argument.
    - Suppose `scrollVal` is initially 0 pixels.
    - Calculate `maxScrollableWidth`: `1200 (scrollWidth) - 800 (clientWidth) = 400 pixels`.
    - Since `scrollVal` is initially 0, the left arrow icon should be hidden (`none`) because we are at the beginning.
    - The difference between `maxScrollableWidth` and `scrollVal` is `400 pixels`, so the right arrow icon should be displayed (`flex`).

    2. **Event listener for arrow icons**:
    - Suppose the user clicks on the right arrow icon.
    - The click event triggers the event listener function, updating the `scrollLeft` of the `tabContainer`.
    - Let's say the user clicks the right arrow icon, and `scrollLeft` is updated to `340 pixels` (assuming a fixed scroll amount).
    - Now, `scrollVal` becomes `340 pixels`.
    - The `handleIcons(scrollVal)` function is called with the updated `scrollVal`.
    - The left arrow icon should be displayed now because `scrollVal` is greater than 0.
    - The difference between `maxScrollableWidth` (400 pixels) and `scrollVal` (340 pixels) is `60 pixels`, so the right arrow icon should still be displayed.

    This example illustrates how the code manages the visibility of arrow icons based on the scroll position of the `tabContainer` and allows users to scroll left or right through the tabs using the arrow icons.
*/
