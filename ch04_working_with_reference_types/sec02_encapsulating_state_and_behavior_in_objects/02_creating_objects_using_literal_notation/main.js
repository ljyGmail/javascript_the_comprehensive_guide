// 4.2.2 Creating Objects Using Literal Notation
"use strict"

// Creating an object using the object literal notation
const item = {
    name: 'JavaScript: The Comprehensive Guide',
    price: 59.95,
    author: 'Philip Ackermann',
    isbn: '978-1-4932-2286-5',
    printDescription: function () {
        console.log(`${this.author}: ${this.name}`)
    }
};

console.log(item.name); // "JavaScript: The Comprehensive Guide"
console.log(item.price); // 59.95
console.log(item.author); // "Philip Ackermann"
console.log(item.isbn); // "978-1-4932-2286-5"
item.printDescription(); // "Philip Ackermann: JavaScript: The Comprehensive Guide"

// Creating an object using the Object.fromEntries() method
const array = [
    ['name', 'JavaScript: The Comprehensive Guide'],
    ['price', 59.95],
    ['author', 'Philip Ackermann'],
    ['isbn', '978-1-4932-2286-5'],
    ['printDescription', function () {
        console.log(`${this.author}: ${this.name}`);
    }]
];

const item2 = Object.fromEntries(array);
console.log(item2.name); // "JavaScript: The Comprehensive Guide"
console.log(item2.price); // 59.95
console.log(item2.author); // "Philip Ackermann"
console.log(item2.isbn); // "978-1-4932-2286-5"
item2.printDescription(); // "Philip Ackermann: JavaScript: The Comprehensive Guide"