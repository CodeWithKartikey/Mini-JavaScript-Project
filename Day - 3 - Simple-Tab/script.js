// Set initial status when the window loads
const initialStatus = () => {
    // Add the "active" class to the first tab link
    document.getElementsByClassName("tablinks")[0].classList.add("active");
    // Display the content of the first tab
    document.getElementById("Tab1").style.display = "flex";
}

// Call the initialStatus function when the window loads
window.addEventListener("load", initialStatus);

// Function to switch between tabs
const openTab = (event, tabname) => {
    // Get all tab links and convert them to an array
    const tabLinks = document.getElementsByClassName("tablinks");
    const tabLinksArray = Array.from(tabLinks);
    // Remove the "active" class from all tab links
    tabLinksArray.forEach((links) => {
        links.classList.remove("active");
    });
    // Get all tab contents and convert them to an array
    const tabContents = document.getElementsByClassName("tabcontent");
    const tabContentsArray = Array.from(tabContents);
    // Hide all tab contents
    tabContentsArray.forEach((content) => {
        content.style.display = "none";
    });
    // Display the content of the selected tab
    document.getElementById(tabname).style.display = "flex";
    // Add the "active" class to the clicked tab link
    event.currentTarget.classList.add("active");
}
