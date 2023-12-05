// 3.6.6 Triggering Errors
"use strict"

checkAge(22);

// checkAge(-22);

function checkAge(age) {
    if (age < 0) {
        throw new Error('Age must not be negative.');
    } else {
        return true;
    }
}

console.log(checkAge2(22)); // true

// console.log(checkAge2(-22)); // Error: Age must not be negative

function checkAge2(age) {
    if (age < 0) {
        throw new Error('Age must not be negative.');
    }
    return true; // In case of error, this statement will no longer be executed.
}

// Different errors can be thrown at different points:
console.log(checkAge3(22)); // true
// console.log(checkAge3("John Doe")); // Error: Age must be a number

function checkAge3(age) {
    if (isNaN(parseFloat(age))) {
        throw new Error('Age must be a number.');
    } else if (age < 0) {
        throw new Error('Age must not be negative.');
    }
    return true;
}

// Different types of error can be thrown according to the nature of the error:

console.log(checkAge4(22)); // true
// console.log(checkAge4("John Doe")); // TypeError: Age must be a number
// console.log(checkAge4(-22)); // will not be called

function checkAge4(age) {
    if (isNaN(parseFloat(age))) {
        throw new TypeError('Age must be a number.');
    } else if (age < 0) {
        throw new RangeError('Age must not be negative.');
    }
    return true; // In case of error, this statement will no longer be executed.
}

try {
    console.log(checkAge4(22)); // true
} catch (error) {
    console.log(error); // will not be called
}

try {
    console.log(checkAge4("John Doe")); // no output
} catch (error) {
    console.log(error); // TypeError: Age must be a number
}

try {
    console.log(checkAge4(-22)); // no output
} catch (error) {
    console.log(error); // RangeError: Age must not be negative
}