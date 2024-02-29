// Get previous and next buttons
const prevBtn = document.querySelector(".fa-angle-left");
const nextBtn = document.querySelector(".fa-angle-right");

// Get all images and images container
const images = document.querySelectorAll(".media");
const imagesContainer = document.querySelector(".media-container");

// Get indicators container
const indicators = document.querySelector(".indicators");

// Initialize current image index
let currentIndex = 0;

// Function to show images based on index
const showImage = (index) => {
    // Hide all images
    images.forEach((image) => { image.style.display = "none"; });
    // Calculate starting index for displaying images
    let startIndex = (index % images.length);
    // Display images
    for (let i = 0; i < 3; i++) {
        images[(startIndex + i) % images.length].style.display = "block";
    }
    currentIndex = startIndex;
    updateIndicator();
}

// Create indicators and handle indicator clicks
images.forEach((image, index) => {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    if (index === currentIndex) {
        indicator.classList.add("active");
    }
    indicator.addEventListener("click", () => showImage(index));
    indicators.appendChild(indicator);
});

// Update active indicators
const updateIndicator = () => {
    const activeIndicators = document.querySelectorAll(".indicator");
    activeIndicators.forEach((activeIndicator, index) => {
        if (index === currentIndex) {
            activeIndicator.classList.add("active");
        } else {
            activeIndicator.classList.remove("active");
        }
    });
}

// Function to show previous image
const previousImage = () => {
    currentIndex = (currentIndex == 0) ? (images.length - 1) : (currentIndex - 1);
    showImage(currentIndex);
}

// Function to show next image
const nextImage = () => {
    currentIndex = (currentIndex == images.length - 1) ? 0 : (currentIndex + 1);
    showImage(currentIndex);
}

// Event listeners for previous and next buttons
prevBtn.addEventListener("click", previousImage);
nextBtn.addEventListener("click", nextImage);

// Show the initial image on page load
document.addEventListener("DOMContentLoaded", () => { showImage(currentIndex); });
