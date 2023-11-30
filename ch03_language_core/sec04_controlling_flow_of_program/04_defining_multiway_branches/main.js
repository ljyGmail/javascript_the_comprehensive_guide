// 3.4.4 Defining Multiway Branches
"use strict"

// @ Example
const testResultElement = document.getElementById('restResult');
const testResult = 0; // Test result, would normally be calculated
let icon = null; // Variable to contain the image name
if (testResult === 0) { // Check the test result, if it has the value 0, ...
    icon = 'pass.png'; // ... the image name "pass.png" is used.
} else if (testResult === 1) { // If the test result, if it has the value 1, ...
    icon = 'info.png'; // ... the image name "info.png" is used.
} else if (testResult === 2) { // If the test result, if it has the value 2, ...
    icon = 'warning.png'; // ... the image name "warning.png" is used.
} else if (testResult === 3) { // If the test result, if it has the value 3, ...
    icon = 'error.png'; // ... the image name "error.png" is used.
} else { // For all other values ...
    icon = 'unknown.png'; // ... the image name "unknown.png" is used.
}

testResultElement.src = '/img/' + icon; // Set the respective image

// switch statement
switch (testResult) { // Check the test result
    case 0: // If this has a value of 0, ...
        icon = 'pass.png'; // ... the image name "pass.png" is used.
        break; // Abort the switch statement
    case 1: // If the test result has a value of 1, ...
        icon = 'info.png'; // ... the image name "info.png" is used.
        break; // Abort the switch statement
    case 2: // If the test result has a value of 2, ...
        icon = 'warning.png'; // ... the image name "warning.png" is used.
        break; // Abort the switch statement
    case 3: // If the test result has a value of 3, ...
        icon = 'error.png'; // ... the image name "error.png" is used.
        break; // Abort the switch statement
    default: // For all other values ...
        icon = 'unknown.png'; // ... the image name "unknown.png" is used.
}
testResultElement.src = 'img/' + icon;

// @ Canceling switch Statements
switch (testResult) { // Check the test result.
    case 0: // If this has a value of 0, ...
        icon = 'pass.png'; // ... the image name "pass.png" is assigned, ...
    // ... but the process is not aborted.
    case 1: // If the test result has a value of 1, ...
        icon = 'info.png'; // ... the image name "info.png" is assigned, ...
    // ... but the process is not aborted.
    case 2: // If the test result has a value of 2, ...
        icon = 'warning.png'; // ... the image name "warning.png" is assigned, ...
    // ... but the process is not aborted.
    case 3: // If the test result has a value of 3, ...
        icon = 'error.png'; // ... the image name "error.png" is assigned, ...
                            // ... but the process is not aborted.
    default: // For all other values  (and all cases above) ...
        icon = 'unknown.png'; // ... the image name "unknown.png" is used.
}
testResultElement.src = 'img/' + icon;

// take advantage of this behavior and combine different case statements
switch (testResult) { // Check the test result.
    case 0: // If this has a value of 0 ...
    case 1: // ... or a value of 1, ...
        icon = 'pass.ong'; // ... the image name "pass.png" is used.
        break; // Abort
    case 2: // If the test result has a value of 2 ...
    case 3: // ... or a value of 3, ...
        icon = 'error.png'; // ... the image name "error.png" is used.
        break; // Abort
    default: // For all other values ...
        icon = 'unknown.png'; // ... the image name "unknown.png" is used.
}
testResultElement.src = 'img/' + icon;

// Not best practice: Boolean conditions within a switch statement
const age = prompt('FOr what age are you looking for film tips?');
switch (true) {
    case(age >= 18):
        console.log('Show films with a rating of G, PG, PG-13, R, and NC-17.');
        break;
    case(age >= 17):
        console.log('Show films with a rating of G, PG, PG-13, and R.');
        break;
    case(age >= 13):
        console.log('Show films with a rating of G, PG, and PG-13.');
        break;
    case(age >= 6):
        console.log('Show films with a rating of G, and PG.');
        break;
}