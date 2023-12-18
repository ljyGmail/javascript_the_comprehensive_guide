// 6.2.4 Defining Multiple Event Listeners
"use strict"

// Definition of Multiple Event Listeners
function checkAgeNotNegative() {
    console.log('checkAgeNotNegative invoked!');
    const element = document.getElementById('age');
    const age = element.value;
    if (age < 0) {
        showMessage('Age cannot be negative.');
    }
}

function checkAgeIsNumber() {
    console.log('checkAgeIsNumber invoked!');
    const element = document.getElementById('age');
    const age = element.value;
    if (!(!isNaN(parseFloat(age)) && isFinite(age))) {
        showMessage('Age must be a number.');
    }
}

function clearMessage() {
    console.log('clearMessage invoked!');
    showMessage('');
}

function showMessage(message) {
    const output = document.getElementById('output');
    output.textContent = message;
}

function init() {
    const element = document.getElementById('age');
    element.addEventListener(
        'blur',
        clearMessage
    );
    element.addEventListener(
        'blur',
        checkAgeNotNegative
    );
    element.addEventListener(
        'blur',
        checkAgeIsNumber
    );
}

document.addEventListener('DOMContentLoaded', init);