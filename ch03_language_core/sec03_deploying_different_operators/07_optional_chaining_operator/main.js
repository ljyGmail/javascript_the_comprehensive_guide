// 3.3.7 The Optional Chaining Operator
"use strict"

// Up to and including ES2019
const john = {
    firstName: 'John',
    lastName: 'Doe',
    contact: {
        email: 'john.doe@javascripthandbuch.com'
    }
};

const james = {
    firstName: 'James',
    lastName: 'Doe',
}

if (john.contact && john.contact.email) {
    console.log(john.contact.email);
}
// Output: "john.doe@javascripthandbuch.com"

// Runtime error!
// console.log(james.contact.email);

if (james.contact && james.contact.email) {
    console.log(james.contact.email);
}
// No output

// With ES2020, the optional chaining operator can be used.

// Access to nested property via optional chaining operator:
console.log(john.contact?.email);
// Output: "john.doe@javascripthandbuch.com"

console.log(james.contact?.email);
// Output: undefined

// Alternative possibility: Using the operator on multiple hierarchy levels:
console.log(john?.contact?.email);
// Output: "john.doe@javascripthandbuch.com"

console.log(james?.contact?.email);
// Output: undefined