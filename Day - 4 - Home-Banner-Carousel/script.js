// Function to initialize the carousel
const showCarousel = () => {
    // Selecting necessary elements
    const indicatorsContainer = document.querySelector(".carousel-indicators");
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector(".carousel-prev");
    const nextBtn = document.querySelector(".carousel-next");

    // Initializing current index of the slide
    let currentIndex = 0;

    // Function to update the indicators based on the current slide
    const updateIndicators = () => {
        const indicators = document.querySelectorAll(".carousel-indicator");
        // Looping through each indicator to update its class
        indicators.forEach((indicator, index) => {
            if(index === currentIndex) {
                // Adding 'active' class if the index matches the current index
                indicator.classList.add("active");
            } else {
                // Removing 'active' class if the index does not match the current index
                indicator.classList.remove("active");
            }
        });
    };

    // Function to show the slide at the given index
    const showSlide = (index) => {
        currentIndex = index;
        // Looping through each slide to update its position
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
        // Update indicators after showing the slide
        updateIndicators();
    };

    // Creating indicators for each slide and attaching event listeners
    slides.forEach((slide, index) => {
        const indicator = document.createElement("div");
        indicator.classList.add("carousel-indicator");
        if(index === currentIndex) {
            // Adding 'active' class to the current slide indicator
            indicator.classList.add("active");
        }
        // Event listener to show the clicked slide
        indicator.addEventListener("click", () => {
            showSlide(index);
        });
        indicatorsContainer.appendChild(indicator);
    });

    // Function to navigate to the previous slide
    const previousImage = () => {
        currentIndex = (currentIndex === 0) ? (slides.length - 1) : (currentIndex - 1);
        showSlide(currentIndex);
    };

    // Function to navigate to the next slide
    const nextImage = () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : (currentIndex + 1);
        showSlide(currentIndex);
    };

    
    // Event listener for keyboard arrow keys to navigate between carousel images
    document.addEventListener("keydown", (e) => {
        e.preventDefault();
        // Check if the left arrow key is pressed
        if(e.key === "ArrowLeft") {
            previousImage();
        } 
        // Check if the right arrow key is pressed
        else if(e.key === "ArrowRight") {
            nextImage();
        }
    });

    // Event listeners for previous and next buttons
    prevBtn.addEventListener("click", previousImage);
    nextBtn.addEventListener("click", nextImage);
}

// Event listener to initialize the carousel when the window has loaded
window.addEventListener("load", showCarousel);
