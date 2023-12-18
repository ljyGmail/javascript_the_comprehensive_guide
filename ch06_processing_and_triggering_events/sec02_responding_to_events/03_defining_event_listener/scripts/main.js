// 6.2.3 Defining Event Listeners
"use strict"

function checkAgeNotNegative() {
    const output = document.getElementById('output');
    const element = document.getElementById('age');
    const age = element.value;
    if (age < 0) {
        output.textContent = 'Age cannot be negative';
    } else {
        output.textContent = '';
    }
}

// Definition of an Event Listener
function init() {
    const element = document.getElementById('age'); // Get element
    element.addEventListener( //  Register event listener
        'blur', // Name of the event
        checkAgeNotNegative, // Name of the event listener
        false // Event flow, details to follow later on
    );
}

document.addEventListener('DOMContentLoaded', init);