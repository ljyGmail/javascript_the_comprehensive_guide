// 3.3.3 Operators for Working with Strings
"use strict"

// concatenation
const salutation = 'Your personal newsletter,'; // string1
const name = 'John Doe'; // string2
const message = salutation + name; // concatenation
console.log(`message: ${message}`);

// insert a space after the comma
const message2 = salutation + ' ' + name;
console.log(`message2: ${message2}`);

// assignment operator +=
let message3 = 'Your personal newsletter,';
message3 += ' ';
message3 += name;
console.log(`message3: ${message3}`);