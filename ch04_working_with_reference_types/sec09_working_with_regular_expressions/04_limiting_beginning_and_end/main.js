// 4.9.4 Limiting Beginning and End
"use strict"

// The Beginning and End of the Phone Number is Not Restricted
const regExp = /\d\d\s\d\d\s\d\d\d\d\d\d\d/;
console.log(regExp.test('12349 30 12345678')); // true
console.log(regExp.test('449 30 123456789')); // true

// Limiting the Beginning of a String
const regExp2 = /^S/;
console.log(regExp2.test('Southampton')); // true
console.log(regExp2.test('In Southampton')); // false

// Limiting the End of a String
const regExp3 = /n$/;
console.log(regExp3.test('Southampton')); // true
console.log(regExp3.test('Southampton Port')); // false

// Limiting the Beginning and End of a String
const regExp4 =/^Southampton$/;
console.log(regExp4.test('Southampton')); // true
console.log(regExp4.test('In Southampton')); // false
console.log(regExp4.test('Southampton Port')); // false

// Limiting the Beginning and ENd of a Word
const regExp5=/\bplay\b/;
console.log(regExp5.test('I play the electric guitar.')); // true
console.log(regExp5.test('I am a teamplayer.')); // false

// Explicitly No Boundary at the Beginning and End of a Word
const regExp6=/\Bplay\B/;
console.log(regExp6.test('I play the electric guitar.')); // false
console.log(regExp6.test('I am a teamplayer.')); // true

// @ Continuation of the Phone Number Example

// Limitation of Beginning and End
const regExp7=/^\d\d\s\d\d\s\d\d\d\d\d\d\d$/;
console.log(regExp7.test('49 30 1234567')); // true
console.log(regExp7.test('Hello World')); // false
console.log(regExp7.test('Hello Max Mustermann')); // false
console.log(regExp7.test('49X30X1234567')); // false
console.log(regExp7.test('49 30 12345678')); // false
console.log(regExp7.test('449 30 1234567')); // false
console.log(regExp7.test('49 30 12345')); // false