// Get the back-to-top button element from the DOM
const backToTopButton = document.getElementById('back-to-top-btn');

// Function to display or hide the back-to-top button based on scroll position
const displayBackToTopButton = () => {
    backToTopButton.style.display = (window.scrollY > 200) ? 'block' : 'none';
};

// Function to scroll smoothly back to the top of the page
const scrollBackToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

// Event listener for scroll event to display or hide the back-to-top button
window.addEventListener('scroll', displayBackToTopButton);

// Event listener for click event on back-to-top button to scroll back to the top
backToTopButton.addEventListener('click', scrollBackToTop);

// Function to handle saving scroll position before the page is unloaded
const beforeUnloadEvent = () => {
    sessionStorage.setItem('scrollPosition', window.scrollY);
};

// Function to scroll to the saved position when the DOM content is loaded
const domContentLoadedEvent = () => {
    let scrollPosition = sessionStorage.getItem('scrollPosition');
    scrollPosition = parseFloat(scrollPosition);
    if (!isNaN(scrollPosition) && scrollPosition > 0) {
        window.scrollTo({
            top: scrollPosition,
            behavior: 'instant',
        });
    }
};

// Function to scroll to the top of the page after the page is fully loaded
const afterLoadEvent = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    // Remove the saved scroll position from sessionStorage
    sessionStorage.removeItem('scrollPosition');
};

// Event listener for beforeunload event to save scroll position
window.addEventListener('beforeunload', beforeUnloadEvent);

// Event listener for DOMContentLoaded event to scroll to saved position
window.addEventListener('DOMContentLoaded', domContentLoadedEvent);

// Event listener for load event to scroll to top and clear saved scroll position
window.addEventListener('load', afterLoadEvent);
