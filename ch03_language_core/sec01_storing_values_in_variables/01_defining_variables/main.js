// 3.1.1 Defining Variables
'use strict'

// variable declaration
var firstName;
var lastName;

// Since ES2015, keyword let is recommended to define variables
let firstName2;
let lastName2;

let firstName3;
let lastName3;

// vaule assignment or variable initialization
firstName3 = 'John';
lastName3 = 'Doe';

// Variable declaration and variable initialization can be combined
let firstName4 = 'John';
let lastName4 = 'Doe';

// declare and initialize serval variables within a single statement
let firstName5 = 'John', lastName5 = 'Doe';

// For better readability, individual variables are often distributed over several lines
let firstName6 = 'John',
    lastName6 = 'Doe';

// the value of a variable can be reassigned
let x = 4711;
console.log(x) // Output: 4711
x = 5;
console.log(x) // Output: 5
