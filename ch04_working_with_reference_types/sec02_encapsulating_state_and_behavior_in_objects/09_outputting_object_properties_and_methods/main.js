// 4.2.9 Outputting Object Properties and Object Methods
"use strict"

// @ Outputting Object Properties and Object Methods via the for-in Loop

// Listing all object properties and object methods via the for-in loop
const item = {
    name: 'JavaScript: The Comprehensive Guide',
    price: 59.95,
    author: 'Philip Ackermann',
    isbn: '978-1-4932-2286-5',
    printDescription: function () {
        console.log(`${this.author}: ${this.name}`);
    }
}

for (let property in item) {
    console.log(`Name: ${property}`);
    console.log(`Value: ${item[property]}`);
}

// @ Outputting Object Properties and Object Methods via the Helper Methods

// Listing all object properties and object methods via the Object.keys() method
const properties = Object.keys(item);
for (let i = 0; i < properties.length; i++) {
    const property = properties[i];
    console.log(`Name: ${property}`);
    console.log(`Value: ${item[property]}`);
}

printArray(properties);

function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

//  Comparison of the Object.keys(), Object.values() and Object entries() methods
const keys = Object.keys(item);
console.log(keys); // [ 'name', 'price', 'author', 'isbn', 'printDescription' ]

const values = Object.values(item);
console.log(values);
/*
[
    'JavaScript: The Comprehensive Guide',
    59.95,
    'Philip Ackermann',
    '978-1-4932-2286-5',
    [Function: printDescription]
]
 */

const entries = Object.entries(item);
console.log(entries);
/*
[
    [ 'name', 'JavaScript: The Comprehensive Guide' ],
    [ 'price', 59.95 ],
    [ 'author', 'Philip Ackermann' ],
    [ 'isbn', '978-1-4932-2286-5' ],
    [ 'printDescription', [Function: printDescription] ]
]
 */

// Difference between the for-in loop and Object.keys()
const john = {
    firstName: 'John'
};

const johnDoe = Object.create(john, {
    lastName: {
        value: 'Doe',
        enumerable: true
    }
});

console.log(john.firstName); // John
console.log(john.lastName); // undefined
console.log(johnDoe.firstName); // John
console.log(johnDoe.lastName); // Doe

// Output: lastName, firstName
for (let i in johnDoe) {
    console.log(i);
}

// Output: [ 'lastName' ]
const properties2 = Object.keys(johnDoe);
console.log(properties2);