// Display Validation Message below the Input Field
"use strict"

function init() {
    let emailElement = document.getElementById('email');
    emailElement.addEventListener('change', validateEmail);
}

function validateEmail(e) {
    // Output of Validation Data
    const event = (e ? e : window.event); // Event
    const emailElement = event.target // Target element
        ? event.target
        : event.srcElement;
    console.log(emailElement.willValidate); // true
    console.log(emailElement.validity); // ValidityState: ...
    console.log(emailElement.validity.valueMissing); // ... Value present?
    console.log(emailElement.validity.valid); // ... Value valid?
    console.log(emailElement.validationMessage); // Validation message

    // Displaying the Validation Message below the Input Field
    let errorContainer = document.getElementById('email-error');
    let messageContainer = errorContainer.querySelector('.error-message');
    if (!emailElement.validity.valid) {
        messageContainer.textContent = emailElement.validationMessage;
        errorContainer.style.display = 'block';
    } else {
        messageContainer.textContent = '';
        errorContainer.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', init);