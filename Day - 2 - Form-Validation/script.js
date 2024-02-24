// Select the form element
const form = document.querySelector('form');

// Function to handle form submission process
const submitProcess = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    submitForm(); // Call function to submit the form
}

// Asynchronous function to submit the form data
const submitForm = async () => {
    if(validateForm()) { // Check if the form data is valid
        const formData = new FormData(form); // Create FormData object from the form
        const url = form.getAttribute('action'); // Get form action URL
        try {
            const response = await fetch(url, { // Send form data to the server using fetch
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) { // If the response is successful
                alert('Form Submitted Successfully.'); // Show success message to the user
                form.reset(); // Clear the form fields
            } else { // If the response indicates failure
                alert('Form Submission Failed. Please Try Again Later.'); // Show error message to the user
            }
        } catch (error) { // If an error occurs during form submission
            alert('Form Submission Failed. Please Try Again Later.'); // Show error message to the user
        }
    }
}

// Function to validate form data
const validateForm = () => {
    const nameInput = form.querySelector('#name').value; // Get value of name input field
    const emailInput = form.querySelector('#email').value; // Get value of email input field
    const numberInput = form.querySelector('#number').value; // Get value of mobile input field
    const messageInput = form.querySelector('#message').value; // Get value of message input field

    // Validation checks for name input field
    if(nameInput.trim() === '') {
        alert("Name Must Be Filled Out.");
        return false;
    }
    if (!/^[a-zA-Z ]+$/.test(nameInput)) {
        alert("Invalid Name Format.");
        return false;
    }

    // Validation checks for email input field
    if(emailInput.trim() === '') {
        alert("Email ID Must Be Filled Out.");
        return false;
    }
    if (!(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(emailInput))) {
        alert("Invalid Email-ID Format.");
        return false;
    }

    // Validation checks for mobile input field
    if(numberInput.trim() === '') {
        alert("Mobile Must Be Filled Out.");
        return false;
    }
    if (!(/^[6-9]\d{9}$/.test(numberInput))) {
        alert("Invalid Mobile Number Format.");
        return false;
    }

    // Validation checks for message input field
    if(messageInput.trim() === '') {
        alert("Message Must Be Filled Out.");
        return false;
    }
    if((messageInput.length < 10) || (messageInput.length > 100)) {
        alert("Message Must Be Between 10 & 100 Characters Long.");
        return false;
    }
    if (!(/^[a-zA-Z0-9,.!? ]+$/.test(messageInput))) {
        alert("Message Contains Invalid Characters.");
        return false;
    }
    return true; // Return true if all validation checks pass
}

// Add event listener for form submission
form.addEventListener('submit', submitProcess);
