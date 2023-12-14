// 4.9.3 Using Character Classes
"use strict"

// Definition of a Character Class
const regExp = /[abcde]/;
console.log(regExp.test('a')); // true
console.log(regExp.test('f')); // false
console.log(regExp.test('afghj')); // true
console.log(regExp.test('fghij')); // false

// Character CLasses Can Be Used to Restrict the Allowed Characters
const regExp2 = /[0-9][0-9].[0-9][0-9].[0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
console.log(regExp2.test('49 30 1234567')); // true
console.log(regExp2.test('49 30 12345')); // false
console.log(regExp2.test('49 30 123456789')); // true
console.log(regExp2.test('Hello World')); // false
console.log(regExp2.test('Hello Max Mustermann')); // false

// The Regular Expression Still Returns true Even for Invalid Strings
console.log(regExp2.test('49X30X1234567')); // true

// THe Two Spaces New Ensure That No Other Characters Are Allowed between the Digits
const regExp3 = /[0-9][0-9] [0-9][0-9] [0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
console.log(regExp3.test('49X30X1234567')); // false

// @ Predefined Character Classes

// @ Continuation of the Phone Number Example

// Predefined Character Classes Are Available for Some Characters
const regExp4 = /\d\d\s\d\d\s\d\d\d\d\d\d\d/;
console.log(regExp4.test('49 30 1234567')); // true
console.log(regExp4.test('Hello World')); // false
console.log(regExp4.test('Hello Max Mustermann')); // false
console.log(regExp4.test('49 30 12345678')); // true
console.log(regExp4.test('49X39X1234567')); // false