// 6.2.1 Defining an Event Handler via HTML
"use strict"

// The Function To Be Called as Event Handler
function checkAgeNotNegative() {
    const output = document.getElementById('output'); // Container for message
    const element = document.getElementById('age'); // Input field for age
    const age = element.value; // Current age value
    if (age < 0) { // If value is negative ...
        output.textContent = 'Age cannot be negative.'; // ... output an error ...
    } else { // ... else ...
        output.textContent = ''; // ... delete message.
    }
}