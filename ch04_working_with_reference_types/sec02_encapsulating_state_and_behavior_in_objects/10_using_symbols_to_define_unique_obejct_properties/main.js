// 4.2.10 Using Symbols to Define Unique Object Properties
"use strict"

// Symbols are suitable as unique keys for object properties
const firstName = Symbol('firstName');
const lastName = Symbol('lastName');
const person = {};
person[firstName] = 'John';
person[lastName] = 'Doe';
console.log(person[firstName]); // "John"
console.log(person[lastName]); // "Doe"
console.log(person[0]); // undefined
console.log(person[1]); // undefined
console.log(person.firstName); // undefined
console.log(person.lastName); // undefined
console.log(person['firstName']); // undefined
console.log(person['lastName']); // undefined

// Definition of object properties based on strings
const firstName2 = 'firstName';
const lastName2 = 'lastName';
const person2 = {};
person2[firstName2] = 'John';
person2[lastName2] = 'Doe';
console.log(person2[firstName2]); // "John"
console.log(person2[lastName2]); // "Doe"
console.log(person2[0]); // undefined
console.log(person2[1]); // undefined
console.log(person2.firstName); // "John"
console.log(person2.lastName); // "Doe"
console.log(person2['firstName']); // "John"
console.log(person2['lastName']); // "Doe"