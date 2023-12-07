// 4.1.2 The Principle of Reference Types
"use strict"

const john = {
    firstName: 'John',
    lastName: 'Doe'
};

const john2 = john;
john2.firstName = 'James';
console.log(john.firstName);
console.log(john2.firstName);