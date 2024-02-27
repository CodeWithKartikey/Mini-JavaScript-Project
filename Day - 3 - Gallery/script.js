// DOM elements
const mediaLightBox = document.querySelector(".media-lightbox-container"); // Container for the lightbox
const mediaLightBoxOverlay = document.querySelector(".media-lightbox-overlay"); // Overlay for closing the lightbox
const thumbnails = document.querySelectorAll(".photo-thumbnails img"); // Thumbnails of the images
const image = document.querySelector(".media-lightbox img"); // Displayed image in the lightbox
const galleryIndex = document.querySelector(".gallery-index"); // Index display for the current image
const prevBtn = document.querySelector(".prev-btn"); // Button to display previous image
const nextBtn = document.querySelector(".next-btn"); // Button to display next image
const closeBtn = document.querySelector(".close-btn"); // Button to close the lightbox

// Current index of the displayed image
let index = 0;

// Event listener for each thumbnail
thumbnails.forEach((thumbnail, thumbnailIndex) => {
    thumbnail.addEventListener('click', () => {
        // Update index and display the clicked image
        index = thumbnailIndex;
        image.src = thumbnail.src;
        galleryIndex.innerHTML = (index + 1) + ' / ' + thumbnails.length; // Update index display
        mediaLightBox.style.display = 'block'; // Display the lightbox
    });
});

// Hide the lightbox
const hideLightBox = () => {
    mediaLightBox.style.display = 'none';
}

// Show previous image
const showPrevImage = () => {
    index = (index - 1 + thumbnails.length) % thumbnails.length; // Circular navigation
    galleryIndex.innerHTML = (index + 1) + ' / ' + thumbnails.length; // Update index display
    image.src = thumbnails[index].src; // Display previous image
}

// Show next image
const showNextImage = () => {
    index = (index + 1) % thumbnails.length; // Circular navigation
    galleryIndex.innerHTML = (index + 1) + ' / ' + thumbnails.length; // Update index display
    image.src = thumbnails[index].src; // Display next image
}

// Event listener for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (mediaLightBox.style.display === 'block') {
        // Handle arrow keys and Escape key
        if (e.key === "ArrowLeft") {
            showPrevImage(); // Show previous image on left arrow key
        } else if (e.key === "ArrowRight") {
            showNextImage(); // Show next image on right arrow key
        } else if (e.key === "Escape") {
            hideLightBox(); // Close lightbox on Escape key
        }
    }
});

// Event listeners for previous, next, and close buttons

// Show previous image on previous button click
if (prevBtn) {
    prevBtn.addEventListener('click', showPrevImage);
}

// Show next image on next button click
if (nextBtn) {
    nextBtn.addEventListener('click', showNextImage); 
}

// Close lightbox on close button click
if (closeBtn) {
    closeBtn.addEventListener('click', hideLightBox); 
}

// Event listener for closing the lightbox when overlay is clicked
if (mediaLightBoxOverlay) {
    mediaLightBoxOverlay.addEventListener('click', hideLightBox);
}
