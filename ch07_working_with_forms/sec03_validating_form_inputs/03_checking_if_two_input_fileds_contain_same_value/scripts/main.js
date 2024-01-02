// Checking if Two Input Fields Contain the Same Value
"use strict"

function init() {
    let emailElement = document.getElementById('email');
    let emailElement2 = document.getElementById('email2');
    emailElement.addEventListener('change', validateEmail);
    emailElement2.addEventListener('change', validateEmail);
}

function validateEmail(e) {
    let emailElement = document.getElementById('email');
    let emailElement2 = document.getElementById('email2');
    if (emailElement.value !== emailElement2.value) {
        emailElement.setCustomValidity('Emails must match.');
        emailElement2.setCustomValidity('Emails must match.');
    } else {
        emailElement.setCustomValidity('');
        emailElement2.setCustomValidity('');
    }

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