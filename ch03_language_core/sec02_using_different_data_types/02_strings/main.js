// 3.2.2 Strings
"use strict"

// Definition of Strings
const firstName = 'John'; // single quotes
const lastName = "Doe"; // double quotes
const age = "22"; // not a number, but a string
// const street = 'Sample Street"; // syntax error: mixed form

// Escaping of Characters  within Strings
const message1 = 'Your name is "John Doe"';
const message2 = "Your name is 'John Doe'";
const message3 = 'Your name is \'John Doe\'';
const message4 = "Your name is \"John Doe\"";

console.log(message1); // Output: Your name is "John Doe"
console.log(message2); // Output: Your name is 'John Doe'
console.log(message3); // Output: Your name is 'John Doe'
console.log(message4); // Output: Your name is "John Doe"

// control characters
const message = 'Hello\nMr.\nDoe';
console.log(message);

// Using Template Strings
const myName = 'John Doe';
const myAge = 44;
const message5 = 'My name is ' + myName + ', I am ' + myAge + ' years old.';
console.log(message5);

const message6 = `Hello World`;
console.log(message6); // Hello World

// Defining Placeholders within Strings
const message7 = `My name is ${myName}, I am ${myAge} years old`;
console.log(message7); // My name is John Doe, I am 44 years old.

// Evaluating Expressions within Strings
function getName() {
    return myName;
}

const message8 = `My name is ${getName()}, I am twice the age of ${myAge / 2}`;
console.log(message8); // "My name is John Doe, I am twice the age of 22."

// Defining Multiline Strings
const message9 = 'Dear Mr. Doe, \n\nWe are happy to return ' +
    'the requested documents to you for review. \n\n' +
    'Yours sincerely, \nMrs. Smith, \nSample Company';
console.log(message9);
// Output:
//
// Dear Mr. Doe,
//
// We are happy to return the requested documents to you for review.
//
// Your  sincerely,
// Mrs. Smith,
// Sample Company

const message10 = `Dear Mr. Doe,

We are happy to return the requested documents to your for review.

Yours sincerely,
Mrs. Smith,
Sample Company`;

console.log(message10); // The output is the same as above