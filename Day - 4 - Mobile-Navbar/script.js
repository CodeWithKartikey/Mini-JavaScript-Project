// Selecting the navbar toggle button
const toggleMenu = document.querySelector(".navbar-toggle");

// Selecting the navbar menu
const navbarMenu = document.querySelector(".navbar-menu");

// Function to toggle the mobile navbar menu visibility
const mobileNavbar = () => {
    navbarMenu.classList.toggle("show"); // Toggling the 'show' class on the navbar menu
}

// Adding event listener to the navbar toggle button for click event
toggleMenu.addEventListener("click", mobileNavbar);
