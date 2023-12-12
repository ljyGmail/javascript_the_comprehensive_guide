// 4.4.6 Copying Object Properties from Another Object
"use strict"

// Inserting Object Properties via Spread Properties
const firstName = 'John';
const lastName = 'Doe';
const properties = {
    age: 33,
    hairColor: 'brown',
    height: 1.8
};

const person = {
    firstName,
    lastName,
    ...properties
};

console.log(person);
// {
//     firstName: 'John',
//         lastName: 'Doe',
//     age: 33,
//     hairColor: 'brown',
//     height: 1.8
// }