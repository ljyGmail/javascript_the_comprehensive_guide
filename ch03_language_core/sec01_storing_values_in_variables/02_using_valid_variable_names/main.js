// 3.1.2 Using Valid Variable Names
'use strict'

// @ Keywords
// @ Variable Names Already Assigned
const number = 22; // Define variable
console.log(number); // Output: 22
// const console = 4711; // Define variable
// console.log(number); // TypeError: console.log is not a function

// @ Allowed Characters
// const 2ndName = 'James'; // invalid because it starts with a number
// const first%Name = 'John'; // invalid because it contains special characters
// const first-Name = 'John'; // invalid because it contains a hyphen
const first_name = 'John'; // valid
const _firstname = 'John'; // valid
const $firstname = 'John'; // valid

// @ Case Sensitivity
const name = 'John'; // This is a different variable ...
const Name = 'James'; // ... from this variable ...
const nAme = 'Peter'; // ... and this variable.

// @ CamelCase Spelling
const defaultValue = 2345;
const firstName = 'John';
const lastName = 'Doe';
const isAdmin = true;
const userIsNotLoggedIn = true;

// @ Meaningful Names
// not very meaningful variable names
const fn = 'John';
const ln = 'Doe';

// meaningful variable names
const firstName2 = 'John';
const lastName2 = 'Doe';
