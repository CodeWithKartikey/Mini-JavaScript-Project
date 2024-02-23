// Number of cards to display per page
const cardsPerPage = 3;

// DOM elements
const dataContainer = document.getElementById('data-container'); // Container holding the cards
const pagination = document.getElementById('pagination'); // Pagination container
const prevButton = document.getElementById('prev'); // Button to navigate to the previous page
const nextButton = document.getElementById('next'); // Button to navigate to the next page
const pageLinks = document.querySelectorAll('.page-link'); // Page number links
const pageNumbers = document.getElementById('page-numbers'); // Element to display current page number
const cards = Array.from(dataContainer.getElementsByClassName('card')); // Array of card elements

// Calculate the total number of pages
const totalPages = Math.ceil(cards.length / cardsPerPage); // Total number of pages based on card count
let currentPage = 1; // Initially set the current page to 1

// Function to display cards for a specific page
function displayPage(page) {
    const startIndex = (page - 1) * cardsPerPage; // Index of the first card on the page
    const endIndex = startIndex + cardsPerPage; // Index of the last card on the page

    cards.forEach((card, index) => {
        // Show cards within the range, hide others
        card.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
    });
}

// Function to update pagination buttons and page numbers
function updatePagination() {
    // Update page number display
    pageNumbers.textContent = `Page ${currentPage} of ${totalPages}`;

    // Disable prevButton if it's the first page
    prevButton.disabled = currentPage === 1;

    // Disable nextButton if it's the last page
    nextButton.disabled = currentPage === totalPages;

    // Update active state of page links
    pageLinks.forEach((link) => {
        const page = parseInt(link.getAttribute('data-page'));
        link.classList.toggle('active', page === currentPage);
    });
}

// Event listener for "Previous" button
prevButton.addEventListener('click', () => {
    if (currentPage > 1) { // Ensure not on the first page
        currentPage--; // Decrement current page
        displayPage(currentPage); // Update displayed cards
        updatePagination(); // Update pagination controls
    }
});

// Event listener for "Next" button
nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) { // Ensure not on the last page
        currentPage++; // Increment current page
        displayPage(currentPage); // Update displayed cards
        updatePagination(); // Update pagination controls
    }
});

// Event listener for page number links
pageLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior

        const page = parseInt(link.getAttribute('data-page')); // Get the page number
        if (page !== currentPage) { // Ensure not already on the selected page
            currentPage = page; // Set current page to the selected page
            displayPage(currentPage); // Update displayed cards
            updatePagination(); // Update pagination controls
        }
    });
});

// Initial page load
displayPage(currentPage); // Display cards for the initial page
updatePagination(); // Update pagination controls initially
