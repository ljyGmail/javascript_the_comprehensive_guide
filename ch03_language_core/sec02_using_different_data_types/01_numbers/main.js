// 3.2.1 Numbers
'use strict'

// Defining Numbers
const number1 = 5; // definition of an integer
const number2 = 0.5; // definition of a decimal
const number3 = -22; // definition of a negative integer
const number4 = -0.9; // definition of a negative decimal
const number5 = 12_300; // separator for decimal representation
const number6 = 1_000_000; // separator for decimal representation

console.log(number1); // 5
console.log(number2); // 0.5
console.log(number3); // -22
console.log(number4); // -0.9
console.log(number5); // 12300
console.log(number6); // 1000000n

// binary notation
const number7 = 0b01010101; // definition of a binary number (decimal value of 85)
// const number8 = 0b01010102; // invalid binary number
const number9 = 0b1010_0011_1010_0101; // separator for binary representation

console.log(number7); // 85
console.log(number9); // 41893

// octal notation
// * Octal literals are not allowed in strict mode.
// const number10 = 050; // definition of an octal number (decimal value of 40)
// const number11 =078; // invalid octal number (value of 78)
// const number12 = 011147; // definition of an octal number (decimal value of 4711)

// console.log(number10);
// console.log(number12);

// hexadecimal notation
const number13 = 0xF; // definition of a hexadecimal number (decimal value of 15)
const number14 = 0xb; // definition of a hexadecimal number (decimal value of 11)
// const number15 = 0xG; // invalid hexadecimal number (syntax error)
const number16 = 0xAF_BC_C0; // separator for hexadecimal representation

console.log(number13); // 15
console.log(number14); // 11
console.log(number16); // 1117120

// The Value Range of Numbers
console.log(Number.MIN_VALUE); // Output: 5e-324
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity
console.log(Number.POSITIVE_INFINITY); // Output: Infinity
