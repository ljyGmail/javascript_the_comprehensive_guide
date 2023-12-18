// 6.2.5 Passing Arguments to Event Listeners
"use strict"

// Passing Parameters to Event Listeners
function showMessage(message) {
    const output = document.getElementById('output');
    output.textContent = message;
}

function checkAgeNotNegative(age) {
    console.log('checkAgeNotNegative invoked!');
    if (age < 0) {
        showMessage('Age cannot be negative.');
    }
}

function checkAgeIsNumber(age) {
    console.log('checkAgeIsNumber invoked!');
    if (!(!isNaN(parseFloat(age)) && isFinite(age))) {
        showMessage('Age must be a number.');
    }
}

function clearMessage() {
    console.log('clearMessage invoked!');
    showMessage('');
}

function getAgeValue() {
    const element = document.getElementById('age');
    const age = element.value;
    return age;
}

function init() {
    const element = document.getElementById('age');
    /*
    element.addEventListener(
        'blur',
        clearMessage
    );
    element.addEventListener(
        'blur',
        function () {
            const age = getAgeValue();
            checkAgeNotNegative(age);
        }
    );
    element.addEventListener(
        'blur',
        function () {
            const age = getAgeValue();
            checkAgeIsNumber(age);
        }
    );
     */

    // @@ Event Listeners as Arrow Functions

    // Event Listeners Can Also Be Defined as Arrow Functions
    element.addEventListener(
        'blur',
        clearMessage
    );
    element.addEventListener(
        'blur',
        () => { // anonymous arrow function
            const age = getAgeValue(); // get value for age
            checkAgeNotNegative(age); // call the actual function
        }
    );
    element.addEventListener(
        'blur',
        () => { // anonymous arrow function
            const age = getAgeValue(); // get value for age
            checkAgeIsNumber(age); // call the actual function
        }
    );
}

document.addEventListener('DOMContentLoaded', init);