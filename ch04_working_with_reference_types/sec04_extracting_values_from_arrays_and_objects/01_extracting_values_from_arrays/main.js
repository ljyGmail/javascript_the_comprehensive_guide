// 4.4.1 Extracting Values from Arrays
"use strict"

// @ Extracting Values from Arrays without Destructuring

// Extracting Values from an Array without Destructuring
const bestOfStonerrock = [
    'Kyuss',
    'Spiritual Beggars',
    'Spice and the RJ Band',
    'Band of Spice'
];

const one = bestOfStonerrock[0];
const two = bestOfStonerrock[1];
const three = bestOfStonerrock[2];
const four = bestOfStonerrock[3];

// @ Extracting Values from Arrays with Destructuring

// Extracting Values via Array Destructuring
const [
    one2,
    two2,
    three2,
    four2
] = bestOfStonerrock;

console.log(one2); // "Kyuss"
console.log(two2); // "Spiritual Beggars"
console.log(three2); // "Spice and the RJ Band"
console.log(four2); // "Band of Spice"

// Creating an Array Based on Variables
const bestOfStonerrock2 = [
    one2,
    two2,
    three2,
    four2
];

// @ Using Already Existing Variables for Destructuring

// For Already Existing Variables, let Can Also Be Omitted during Destructuring
let one3;
let two3;
let three3;
let four3;

[
    one3,
    two3,
    three3,
    four3
] = bestOfStonerrock;

// @ Value Assignment with Fewer Elements in the Array

// Undefined Values in Array Destructuring Are Initialized with the Value undefined
const [
    one4,
    two4,
    three4,
    four4,
    five4
] = bestOfStonerrock;

console.log(five4); // undefined

// @ Defining Default Values for Variables

// Default Values in Array Destructuring
const bestOfStonerrock3 = [
    'Spiritual Beggars',
    'Spice and the RJ Band'
];

const [
    one5 = 'Kyuss',
    two5 = 'Kyuss',
    three5 = 'Kyuss',
    four5 = 'Kyuss'
] = bestOfStonerrock3;

console.log(one5); // "Spiritual Beggars"
console.log(two5); // "Spice and the RJ Band"
console.log(three5); // "Kyuss"
console.log(four5); // "Kyuss"

// @ Extracting Only Specific Values

// Extracting Only Specific Values
const bestOfStonerrock4 = [
    'Kyuss',
    'Spiritual Beggars',
    'Spice and the RJ Band',
    'Band of Spice'
];

const [
    one6,
    ,           // No variable is specified here.
    three6,
    four6
] = bestOfStonerrock4;

console.log(one6); // "Kyuss"
// console.log(two6); // Error, not defined
console.log(three6); // "Spice and the RJ Band"
console.log(four6); // "Band of Spice"

// @ Extracting Values from Multidimensional Arrays

// Creating a Multidimensional Array
const coordinates = [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10]
];

// Array Destructuring of a Multidimensional Array

const [
    [x1, y1, z1],
    [x2, y2, z2],
    [x3, y3, z3]
] = coordinates;

console.log(x1, y1, z1);
console.log(x2, y2, z2);
console.log(x3, y3, z3);