// 3.3.8 The Logical Assignment Operators
"use strict"

// logical OR assignment
let a1 = 5;
let a2 = null;
let a3 = false;
a1 ||= 7; // --> 5
a2 ||= 7; // --> 7
a3 ||= 7; // --> 7

console.log(`a1: ${a1}`); // "a1: 5"
console.log(`a2: ${a2}`); // "a2; 7"
console.log(`a3: ${a3}`); // "a2: 7"

// logical AND assignment
let b1 = 5;
let b2 = null;
let b3 = false;
b1 &&= 7; // --> 7
b2 &&= 7; // --> null
b3 &&= 7; // --> false

console.log(`b1: ${b1}`); // "b1: 7"
console.log(`b2: ${b2}`); // "b2: null"
console.log(`b3: ${b3}`); // "b3: false"

// logical nullish assignment
let c1 = 5;
let c2 = null;
let c3 = false;
c1 ??= 7; // --> 5
c2 ??= 7; // --> 7
c3 ??= 7; // --> false

console.log(`c1: ${c1}`);
console.log(`c2: ${c2}`);
console.log(`c3: ${c3}`);

// @ Real-Life Example: Initialization of Object Properties
const james = {
    firstName: 'James',
};
james.firstName ||= 'John';
james.lastName ||= 'Doe';
console.log(james);
// { firstName: 'James', lastName: 'Doe' }

// Prior to ES2021, the following was required:
const peter = {
    firstName: 'Peter',
};
peter.firstName || (peter.firstName = 'John');
peter.lastName || (peter.lastName = 'Doe');
console.log(peter);
// { firstName: 'Peter', lastName: 'Doe' }