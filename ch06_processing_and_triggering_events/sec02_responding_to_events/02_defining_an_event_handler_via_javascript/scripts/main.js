// 6.2.2 Defining an Event  Handler via JavaScript
"use strict"

function checkAgeNotNegative() {
    const output = document.getElementById('output'); // Container for message
    const element = document.getElementById('age'); // Input field for age
    const age = element.value; // Current age value
    if (age < 0) { // If value is negative ...
        console.log('age is negative.');
        output.textContent = 'Age cannot be negative.'; // ... output an  error ...
    } else { // else ...
        console.log('age is zero or positive.');
        output.textContent = ''; // ... delete message.
    }
}

function checkAgeIsNumber() {
    const output = document.getElementById('output'); // Container for message
    const element = document.getElementById('age');
    const age = element.value;
    const regExp = /-?\d*/;
    if (!regExp.test(age)) {
        console.log('age is not a number');
        output.textContent = 'Age must be a number.';
    } else {
        console.log('age is a number');
        output.textContent = '';
    }
}

// Definition of a DOM Event Handler
function init() {
    const element = document.getElementById('age'); // (1) Get element
    // element.onblur = // (2) Define event
    //     checkAgeNotNegative; // (3) Define event handler
    // Only One Event Handler Can Be Defined per Event
    // element.onblur = checkAgeIsNumber; // Here, the event handler is overwritten.

    // Anonymous Functions Can Partially Circumvent the Described Problem but Are Relative Inflexible
    element.onblur = function () { // anonymous function ...
        checkAgeNotNegative(); // ... in which both this function ...
        checkAgeIsNumber(); // ... and this function ...
    } // ... are called.
}

window.onload = init;