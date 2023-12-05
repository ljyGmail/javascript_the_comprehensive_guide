// 3.6.5 Catching and Handling Errors
"use strict"

try {
    // Execute code that potentially produces errors
} catch (error) {
    // Handle the error
}

const userInput = prompt('Please enter the length of the array:');
const length = parseInt(userInput);

let array;
try {
    array = createArray(length);
} catch (error) {
    console.log(error.name); // Output: RangeError
    console.log(error.message); // invalid array length
}

function createArray(length) {
    return new Array(length);
}