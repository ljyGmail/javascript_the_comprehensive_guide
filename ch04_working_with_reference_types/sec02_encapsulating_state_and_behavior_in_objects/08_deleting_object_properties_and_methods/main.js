// 4.2.8 Deleting Object Properties and Object Methods
"use strict"

// Removing an object property
const item = {
    name: 'JavaScript: The Comprehensive Guide',
    price: 59.95,
    author: 'Philip Ackermann',
    isbn: '978-1-4932-2286-5',
    printDescription: function () {
        console.log(`${this.author}: ${this.name}`);
    }
}

console.log('price' in item); // Output: true
console.log(item.price); // Output: 59.95
delete item.price; // Delete property
console.log('price' in item); // Output: false
console.log(item.price); // Output: undefined

// Assigning the value null or undefined to an object property does not delete the property from the object
const item2 = {
    name: 'JavaScript: The Comprehensive Guide',
    price: 59.95,
    author: 'Philip Ackermann',
    isbn: '978-1-4932-2286-5',
    printDescription: function () {
        console.log(`${this.author}: ${this.name}`);
    }
}
console.log('price' in item2); // Output: true
console.log(item2.price); // Output: 59.95
item2.price = null;
console.log('price' in item2); // Output: true
console.log(item2.price); // Output: null
item2.price = undefined;
console.log('price' in item2); // Output: true
console.log(item2.price); // Output: undefined