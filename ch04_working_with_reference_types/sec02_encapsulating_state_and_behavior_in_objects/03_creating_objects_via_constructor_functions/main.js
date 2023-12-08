// 4.2.3 Creating Objects via Constructor Functions
"use strict"

// Example of a function that can be used as a constructor function
function Item(name, price, author, isbn) {
    this.name = name;
    this.price = price;
    this.author = author;
    this.isbn = isbn;
    this.printDescription = function () {
        console.log(`${this.author}: ${this.name}`);
    }
}

// Creating an object via a constructor function
const item = new Item(
    'JavaScript: The Comprehensive Guide',
    59.95,
    'Philip Ackermann',
    '978-1-4932-2286-5'
);

console.log(item.name); // "JavaScript: The Comprehensive Guide"
console.log(item.price); // 59.95
console.log(item.author); // "Philip Ackermann"
console.log(item.isbn); // "978-1-4932-2286-5"
item.printDescription(); // "Philip Ackermann: JavaScript: The Comprehensive Guide"

const item2 = new Item(
    'Node.js: The Comprehensive Guide',
    49.94,
    'Sebastian Springer',
    '978-1-4932-2292-6'
);

console.log(item2.name); // "Node.js: The Comprehensive Guide"
console.log(item2.price); // 49.94
console.log(item2.author); // "Sebastian Springer"
console.log(item2.isbn); // "978-1-4932-2292-6"
item2.printDescription(); // "Sebastian Springer: Node.js: The Comprehensive Guide"

// @ Prototypes

// Using various properties and methods, conclusions can be drawn about
// the prototype used and the constructor function used
console.log(Item.prototype); // Item {}
console.log(item.__proto__); // Item {}
console.log(Object.getPrototypeOf(item)); // Item {}
console.log(item.constructor); // function Item(...)

// Applying the typeof and instanceof operators to an object created via a constructor function
console.log(typeof item); // object
console.log(item instanceof Item); // true
