// 4.1.4 Determining the Type of a Variable
"use strict"

// Application of the typeof operator for different values
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof 4711); // number
console.log(typeof 22.22); // number
console.log(typeof 'John Doe'); // string
console.log(typeof function () {
}); // function
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof Symbol('B')); // Symbol

// Application of the instanceof Operator for Different Values
const john = {
    firstName: 'John',
    lastName: 'Doe'
};

const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

function add(x, y) {
    return x + y;
}

console.log(john instanceof Object); // true
console.log(john instanceof Array); // false
console.log(numbers instanceof Object); // true
console.log(numbers instanceof Array); // true
console.log(add instanceof Function); // true
console.log(add instanceof Object); // true

// For values of primitive data types, the instanceof operator always returns false
console.log(true instanceof Object); // false
console.log(4711 instanceof Object); // false
console.log('John Doe' instanceof Object); // false

// Using the Array.isArray() method for different values
console.log(Array.isArray(john)); // false
console.log(Array.isArray(numbers)); // true