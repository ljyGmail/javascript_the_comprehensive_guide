// 4.2.5 Creating Objects via the Object.create() Function
"use strict"

// Creating an object via the Object.create() helper function
const item = Object.create(Object.prototype, {
    name: {
        value: 'JavaScript: The Comprehensive Guide'
    },
    price: {
        value: 59.95
    },
    author: {
        value: 'Philip Ackermann'
    },
    isbn: {
        value: '978-1-4932-2286-5'
    },
    printDescription: {
        value: function () {
            console.log(`${this.author}: ${this.name}`);
        }
    }
});

console.log(item.name); // "JavaScript: The Comprehensive Guide"
console.log(item.price); // 59.95
console.log(item.author); // "Philip Ackermann"
console.log(item.isbn); // "978-1-4932-2286-5"
item.printDescription(); // "Philip Ackermann: JavaScript: The Comprehensive Guide"

// @ Property Attributes
/*
- writable
- enumerable
- configurable
- set
- get
 */

// Using property attributes
const item2 = Object.create(Object.prototype, {
    name: {
        value: 'JavaScript: The Comprehensive Guide',
        writable: false,
        configurable: true,
        enumerable: true
    },
    price: {
        value: 59.95,
        writable: true,
        configurable: true,
        enumerable: true
    },
    author: {
        value: 'Philip Ackermann',
        writable: false,
        configurable: true,
        enumerable: true
    },
    isbn: {
        value: '978-1-4932-2286-5',
        writable: false,
        configurable: true,
        enumerable: false // During iteration, the "isbn" property is not output
    },
    printDescription: {
        value: function () {
            console.log(`${this.author}: ${this.name}`);
        }
    }
});

for (let property in item2) {
    console.log(property); // Output: "name", "price", "author"
}

// item2.name = 'Cool new Java book'; // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
console.log(item2.name);

item2.price = 54.95;
console.log(item2.price); // 54.95, because for the "price" property, the "writable"attribute has a value of true

// Access to the property attributes
const item3 = {
    name: 'JavaScript: The Comprehensive Guide',
    price: 59.95,
    author: 'Philip Ackermann',
    isbn: '978-1-4932-2286-5',
    printDescription: function () {
        console.log(`${this.author}: ${this.name}`);
    }
};

const propertyDescriptor = Object.getOwnPropertyDescriptor(item3, 'name');
console.log(propertyDescriptor.enumerable); // true
console.log(propertyDescriptor.configurable); // true
console.log(propertyDescriptor.writable); // true
console.log(propertyDescriptor.value); // "JavaScript: The Comprehensive Guide"