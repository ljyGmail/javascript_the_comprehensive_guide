// 4.9.6 Searching for Occurrences
"use strict"

// The exec() Method Returns More Detailed Information (the index)
const text = 'The phone number is +49 30 12345467.';
const regExp = /\+?\d{2}\s\d{2}\s\d{5,7}/;
const result = regExp.exec(text);
console.log(
    'Number ' + result[0]
    + ' found at index ' + result.index
    + '.'
);
console.log(result.input); // The string passed to exec() method.