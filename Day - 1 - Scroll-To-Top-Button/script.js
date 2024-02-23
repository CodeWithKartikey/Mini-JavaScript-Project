/*
    This script creates a back-to-top button that appears when the user scrolls down the page beyond a certain point, 
    and scrolls smoothly to the top when clicked.
*/

// Get the back-to-top button element from the DOM
const backToTopButton = document.getElementById('back-to-top-btn');

// Function to toggle the display of the back-to-top button based on scroll position
const toggleBackToTopButton = () => {
    backToTopButton.style.display = (window.scrollY > 200) ? 'block' : 'none';
};

// Function to scroll smoothly to the top of the page
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};

// Event listener for scroll event to toggle back-to-top button visibility
window.addEventListener('scroll', toggleBackToTopButton);

// Event listener for click event on back-to-top button to scroll to top
backToTopButton.addEventListener('click', scrollToTop);

/*

const backToTopButton = document.getElementById('back-to-top-btn');

window.addEventListener('scroll', () => {
    if(window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

*/

/*
    const scrollToTop = () => {
        window.scroll(0, 0); // Scroll to the top-left corner of the document
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };
*/