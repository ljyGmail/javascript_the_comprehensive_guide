// 4.9.2 Testing Characters against a Regular Expression
"use strict"

// The test() Method Can Be Used to Test whether a Character Pattern Occurs within a String
const regExp = /abcde/;
console.log(regExp.test('abcdefghijklmnopqrstuvwxyz')); // Output: true

// First Version of the Regular Expression for Testing International Phone Numbers
const regExp2 = /............./;
console.log(regExp2.test('49 30 1234567')); // true
console.log(regExp2.test('49 30 12345')); // false
console.log(regExp2.test('49 30 123456789')); // true

// All Strings That Contain at Least 13 Characters Fit the Regular Expression,
// Even Those That Do Not Contain Numbers
const regExp3 = /............./;
console.log(regExp2.test('Hello World')); // false
console.log(regExp2.test('Max Mustermann')); // true
console.log(regExp2.test('Hello Max Mustermann')); // true