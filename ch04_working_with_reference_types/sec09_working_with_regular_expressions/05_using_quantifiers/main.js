// 4.9.5 Using Quantifiers
"use strict"

// @ Defining Optional Occurrences

// Defining Optional Occurrences
const regExp = /^abcdef?$/;
console.log(regExp.test('abcde')); // true
console.log(regExp.test('abcdef')); // true
console.log(regExp.test('abcdeff')); // false

// @ Defining Any Number of Occurrences

// Defining Any Number of Occurrences
const regExp2 = /^abcdef*$/;
console.log(regExp2.test('abcde')); // true
console.log(regExp2.test('abcdef')); // true
console.log(regExp2.test('abcdeff')); // true

// @ Defining at Least One Occurrence

// Defining at Least One Occurrence
const regExp3 = /^abcdef+$/;
console.log(regExp3.test('abcde')); // false
console.log(regExp3.test('abcdef')); // true
console.log(regExp3.test('abcdeff')); // true

// @ Defining an Exact Number of Occurrences

// Defining the Exact Number of Occurrences
const regExp4 = /^abcdef{2}$/;
console.log(regExp4.test('abcde')); // false
console.log(regExp4.test('abcdef')); // false
console.log(regExp4.test('abcdeff')); // true
console.log(regExp4.test('abcdefff')); // false
console.log(regExp4.test('abcdeffff')); // false

// @ Defining a Minimum Number of Occurrences

// Defining a Minimum Number of Occurrences
const regExp5 = /^abcdef{2,}$/;
console.log(regExp5.test('abcde')); // false
console.log(regExp5.test('abcdef')); // false
console.log(regExp5.test('abcdeff')); // true
console.log(regExp5.test('abcdefff')); // true
console.log(regExp5.test('abcdeffff')); // true

// @ Defining a Minimum and a Maximum Number of Occurrences

// Defining a Minimum and a Maximum Number of Occurrences
const regExp6 = /^abcdef{2,3}$/;
console.log(regExp6.test('abcde')); // false
console.log(regExp6.test('abcdef')); // false
console.log(regExp6.test('abcdeff')); // true
console.log(regExp6.test('abcdefff')); // true
console.log(regExp6.test('abcdeffff')); // false

// @ Continuation of the Phone Number Example

// The Phone Number Example Using Quantifiers
const regExp7 = /^\d{2}\s\d{2}\s\d{5,7}$/;
console.log(regExp7.test('49 30 1234567')); // true
console.log(regExp7.test('Hello World')); // false
console.log(regExp7.test('Hello Max Mustermann')); // false
console.log(regExp7.test('49X30X1234567')); // false
console.log(regExp7.test('49 30 12345678')); // false
console.log(regExp7.test('449 30 1234567')); // false
console.log(regExp7.test('49 30 12345')); // true
console.log(regExp7.test('+49 30 1234567')); // false

// The Customized Phone Number Example with Optional + Sign
const regExp8 = /^\+?\d{2}\s\d{2}\s\d{5,7}$/;
console.log(regExp8.test('+49 30 1234567')); // true
console.log(regExp8.test('49 30 1234567')); // true
console.log(regExp8.test('Hello World')); // false
console.log(regExp8.test('Hello Max Mustermann')); // false
console.log(regExp8.test('49X30X1234567')); // false
console.log(regExp8.test('49 30 12345678')); // false
console.log(regExp8.test('449 30 1234567')); // false
console.log(regExp8.test('49 30 12345')); // true