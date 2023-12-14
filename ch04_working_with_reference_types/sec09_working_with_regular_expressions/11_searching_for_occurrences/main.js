// 4.9.11 Searching for Occurrences
"use strict"

// The search() Method Can Be Used to Search for Occurrences within a String
const text = 'This text contains a phone number: +49 30 1234567';
const text2 = 'This text does not contain any phone number.';
const regExp = /(\+?\d{2})\s(\d{2})\s(\d{5,7})/g;
console.log(text.search(regExp)); // Output: 35
console.log(text2.search(regExp)); // Output: -1