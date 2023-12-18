// 6.2.6 Removing Event Listeners
"use strict"

// Removing Event Listeners
function showMessage(message) {
    const output = document.getElementById('output');
    output.textContent = message;
}

function checkAgeNotNegative() {
    console.log('checkAgeNotNegative invoked!')
    const age = getAgeValue();
    if (age < 0) {
        showMessage('Age cannot be negative.')
    }
}

function checkAgeIsNumber() {
    console.log('checkAgeIsNumber invoked!')
    const age = getAgeValue();
    if (!(!isNaN(parseFloat(age)) && isFinite(age))) {
        showMessage('Age must be a number.');
    }
}

function clearMessage() {
    console.log('clearMessage invoked!')
    showMessage('');
}

function getAgeValue() {
    return document.getElementById('age').value;
}

function init() {
    const element = document.getElementById('age');
    element.addEventListener('blur', clearMessage);
    element.addEventListener('blur', checkAgeNotNegative);
    element.addEventListener('blur', checkAgeIsNumber);
    const checkbox = document.getElementById('validation');
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            clearMessage();
            element.addEventListener('blur', checkAgeNotNegative);
            element.addEventListener('blur', checkAgeIsNumber);
        } else {
            clearMessage();
            element.removeEventListener('blur', checkAgeNotNegative);
            element.removeEventListener('blur', checkAgeIsNumber);
        }
    });
}

document.addEventListener('DOMContentLoaded', init);