// 4.2.6 Accessing Properties and Calling Methods
"use strict"

// Access to object properties and object methods via dot notation
const item = {
    name: 'JavaScript: The Comprehensive Guide',
    price: 59.95,
    author: 'Philip Ackermann',
    isbn: '978-1-4932-2286-5',
    printDescription: function () {
        console.log(`${this.author}: ${this.name}`);
    }
};

const itemName = item.name;
item.printDescription();

// Access to object properties and object methods via bracket notation
const itemName2 = item['name'];
item['printDescription']();

// In various cases, properties (and methods) can only be access using the bracket notation
const person = {
    'first-name': 'John',
    'last-name': 'Doe'
};

// console.log(person.first-name); // Syntax error
// console.log(person.last-name); // Syntax error
console.log(person['first-name']); // "John"
console.log(person['last-name']); // "Doe"

const firstName = 'first-name';
const lastName = 'last-name';

console.log(person[firstName]);
console.log(person[lastName]);

const name = 'name';
const prefixFirstName = 'first-';
const prefixLastName = 'last-';

console.log(person[prefixFirstName + name]) // "John"
console.log(person[prefixLastName + name]) // "Doe"

// @ Setters and Getters

// Getters and setters when using object literal notation
const item2 = {
    _name: 'JavaScript: The Comprehensive Guide',
    _price: 59.95,
    _author: 'Philip Ackermann',
    _isbn: '978-1-4932-2286-5',
    set name(newName) {
        if (typeof newName === 'string') {
            console.log('Set new name');
            this._name = newName;
        } else {
            throw new TypeError('Name must be a string.');
        }
    },
    get name() {
        console.log('Return name');
        return this._name;
    }
    /* Same for the other properties. */
}

console.log(item2.name); // "Return name"
// "JavaScript: The Comprehensive Guide"
item2.name = 'JavaScript: The Comprehensive Guide By Philip Ackermann'; // "Set new name"

// Getters and setters when using constructor functions
function Item(name, price, author, isbn) {
    this._name = name;
    this._price = price;
    this._author = author;
    this._isbn = isbn;
}

Item.prototype = {
    set name(newName) {
        if (typeof newName === 'string') {
            console.log('Set new name');
            this._name = newName;
        } else {
            throw new TypeError('Name must be a string.');
        }
    },
    get name() {
        console.log('Return name');
        return this._name;
    }
    /* Same for the other properties. */
};

const item3 = new Item(
    'JavaScript: The Comprehensive Guide',
    59.95,
    'Philip Ackermann',
    '978-1-4932-2286-5'
);

console.log(item3.name);

item3.name = 'JavaScript: The Comprehensive Guide By Philip Ackermann';

// Getters and setters when using classes
class ItemClass {
    constructor(name, price, author, isbn) {
        this._name = name;
        this._price = price;
        this._author = author;
        this._isbn = isbn;
    }

    set name(newName) {
        if (typeof newName === 'string') {
            console.log('Set new name');
            this._name = newName;
        } else {
            throw new TypeError('Name must be a string.')
        }
    }

    get name() {
        console.log('Return name')
        return this._name;
    }

    /* Same for the other properties. */
}

const item4 = new ItemClass(
    'JavaScript: The Comprehensive Guide',
    59.95,
    'Philip Ackermann',
    '978-1-4932-2286-5'
);

console.log(item4.name);

item4.name = 'JavaScript: The Comprehensive Guide By Philip Ackermann';

// Getters and setters when using Object.create()
const item5 = Object.create(Object.prototype, {
    name: {
        set: function (newName) {
            if (typeof newName === 'string') {
                console.log('Set new name');
                this._name = newName;
            } else {
                throw new TypeError('Name must be a string.');
            }
        },
        get: function () {
            console.log('Return name');
            return this._name;
        }
        /* Same for the other properties. */
    }
});

item5.name = 'JavaScript: The Comprehensive Guide By Philip Ackermann';

console.log(item5.name);

// @ Data Properties and Access Properties
const item6 = {
    isbn: '',
    _name: '',
    /* Here are the other properties. */
    set name(newName) {
        if (typeof newName === 'string') {
            console.log(`Set new name`);
            this._name = newName;
        } else {
            throw new TypeError('Name must be a string.')
        }
    },
    get name() {
        console.log('Return name');
        return this._name;
    }
    /* Same for other properties. */
}

// Data property
item6.isbn = '978-1-4932-2286-5';
console.log(item6.isbn);

// Possible, but not desired, because access is to take place using set and get.
item._name = 'JavaScript: The Comprehensive Guide';
console.log(item._name);

// Access property
item.name = 'JavaScript: The Comprehensive Guide By Philip Ackermann';
console.log(item.name);