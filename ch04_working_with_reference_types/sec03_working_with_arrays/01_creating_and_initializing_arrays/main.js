// 4.3.1 Creating and Initializing Arrays
"use strict"

// Creating an Array
const names = new Array();

// Creating an Array with a Specified Length
const names2 = new Array(20);

// Creating an Array with Specified Values
const names3 = new Array('John', 'James', 'Peter');

// @@ Calling the Array() Constructor Function
// If the Array() constructor function is called with a single value and this value is a number,
// it is used to define the length of the array.

// Determining the Length of an Array
console.log(names3.length); // Output: 3

// @@ Creating Arrays without the new Keyword
const names4 = Array('John', 'James', 'Peter');

// Creating an Array Using Short Notation
const names5 = ['John', 'James', 'Peter']; // Create an array with specified values

const colors = []; // Create an empty array

// Creating an Array of Objects Using Short Notation
const contacts = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doejavascripthandbook.en'
    },
    {
        firstName: 'James',
        lastName: 'Doe',
        email: 'james.doejavascripthandbook.en'
    },
    {
        firstName: 'Peter',
        lastName: 'Doe',
        email: 'peter.doejavascripthandbook.en'
    }
];

// @@ Different Types in Arrays

// Arrays Can Contain Values of Different Data Types
const values = [];
values[0] = 'John';
values[1] = 4711;
values[2] = true;