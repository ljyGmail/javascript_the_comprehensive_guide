// noValidate Property
"use strict"

function init() {
    let registerForm = document.getElementById('register');
    registerForm.noValidate = true;
    registerForm.addEventListener('submit', validateForm);
}

// Validating All Form Fields within a Form
function validateForm(e) {
    const event = (e ? e : window.event); // Event
    const form = (event.target
        ? event.target
        : event.srcElement);
    let formIsValid = true;
    const formElements = form.querySelectorAll('input, textarea, select');
    for (let i = 0; i < formElements.length; i++) {
        const formElement = formElements[i];
        if (formElement.willValidate !== 'undefined') {
            formElement.checkValidity();
        } else {

        }
        if (!formElement.validity.valid) {
            formIsValid = false;
        }
    }
    if (!formIsValid) {
        if (event.preventDefault) {
            event.preventDefault();
        }
    }
    return formIsValid;
}

document.addEventListener('DOMContentLoaded', init);