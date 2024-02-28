// Function to animate counter value
const counterValue = () => {
  // Select the counter element from the DOM
  const counterElement = document.querySelector(".counter");

  // Set your desired final monetary value here
  const targetValue = 600000; 
  // Animation duration in milliseconds
  const animationDuration = 2000;
  // Animation interval in milliseconds 
  const animationInterval = 20; 
  
  let currentValue = 0;

  // Calculate increment based on target value and animation duration
  let increment = targetValue / (animationDuration / animationInterval);
  
  // Start the timer for animation
  let timerValue = setInterval(function() {
    currentValue = currentValue + increment;
    // Check if current value exceeds or equals target value
    if (currentValue >= targetValue) {
      clearInterval(timerValue);
      currentValue = targetValue;
    }
    // Update the counter element with formatted value
    counterElement.textContent = '₹ ' + formatNumber(currentValue, 2);
  }, animationInterval);
}
  
// Function to format number with Indian currency format
const formatNumber = (number, decimalPlaces) => {
  // Convert number to fixed decimal places
  let formattedNumber = number.toFixed(decimalPlaces);
  // Separate rupees and paise (if present)
  let parts = formattedNumber.split('.');
  let rupees = parts[0];
  let paise = (parts.length > 1) ? ('.' + parts[1]) : '';
  // Add commas for thousands separator (Indian standard)
  rupees = rupees.replace(/\d(?=(\d{2})+\d$)/g, '$&,');
  // Return the formatted number
  return rupees + paise;
}

// Trigger counterValue function when DOM content is loaded
document.addEventListener('DOMContentLoaded', counterValue);
