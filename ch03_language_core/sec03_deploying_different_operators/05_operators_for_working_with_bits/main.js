// 3.3.5 Operators for Working with Bits
"use strict"

let BYTE_A = 0b00000001; // Binary value 00000001, decimal value 1

// Bitwise left shift
BYTE_A = BYTE_A << 1; // Binary value 00000010, decimal value 2
BYTE_A = BYTE_A << 1; // Binary value 00000100, decimal value 4
BYTE_A = BYTE_A << 1; // Binary value 00001000, decimal value 8
BYTE_A = BYTE_A << 1; // Binary value 00010000, decimal value 16
console.log(BYTE_A);
// Bitwise right shift
BYTE_A = BYTE_A >> 1; // Binary value 00001000, decimal value 8
BYTE_A = BYTE_A >> 1; // Binary value 00000100, decimal value 4
BYTE_A = BYTE_A >> 1; // Binary value 00000010, decimal value 2
BYTE_A = BYTE_A >> 1; // Binary value 00000001, decimal value 1
console.log(BYTE_A);

let BYTE_B = 0b01000001; // Binary value 01000001, decimal value 64

// bitwise AND
let BYTE_C = BYTE_A & BYTE_B; // Binary value 00000001, decimal value 1
console.log(BYTE_C);

// bitwise OR
let BYTE_D = BYTE_A | BYTE_B; // Binary value 01000001, decimal value 65
console.log(BYTE_D);

// bitwise exclusive OR
let BYTE_E = BYTE_A ^ BYTE_B; // Binary value 01000000, decimal value 64
console.log(BYTE_E);