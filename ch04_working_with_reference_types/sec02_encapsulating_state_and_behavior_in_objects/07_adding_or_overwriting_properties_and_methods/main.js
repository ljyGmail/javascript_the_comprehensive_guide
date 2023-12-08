// 4.2.7 Adding or Overwriting Object Properties and Object Methods
"use strict"

// @ Creating Object Properties and Object Methods via Dot Notation
const item = {
    isbn: '',
    _name: '',
    /* Here are the other properties. */
    set name(newName) {
        if (typeof newName === 'string') {
            console.log('Set new name');
            this._name = newName
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

// Adding new properties and methods
item.publisher = 'Rheinwerk Verlag';
item.order = function () {
    console.log('The book has been ordered successfully.');
}

// Access to properties and methods defined subsequently
console.log(item.publisher); // Output: Rheinwerk Verlag
item.order(); // Output: The book has been ordered successfully.

// Overwriting properties and methods
item.publisher = 'Rheinwerk Publishing';
item.order = function () {
    console.log(`The book was ordered successfully from ${this.publisher}.`);
}

console.log(item.publisher); // Output: Rheinwerk Publishing
item.order(); // Output: The book was ordered successfully from Rheinwerk Publishing.

// Creating objects and defining properties and methods
const item2 = {
    name: 'JavaScript: The Comprehensive Guide',
    price: 59.95,
    author: 'Philip Ackermann',
    isbn: '978-1-4932-2286-5',
    printDescription: function () {
        console.log(`${this.author}: ${this.name}`);
    }
};

const item3 = {};
item3.name = 'JavaScript: The Comprehensive Guide';
item3.price = 59.95;
item3.author = 'Philip Ackermann';
item3.isbn = '978-1-4932-2286-5';
item3.printDescription = function () {
    console.log(`${this.author}: ${this.name}`);
}

// @ Creating Object Properties and Object Methods via Bracket Notation

// Defining of properties and methods via bracket notation
const item4 = {};
item4['name'] = 'JavaScript: The Comprehensive Guide';
item4['price'] = 59.95;
item4['author'] = 'Philip Ackermann';
item4['isbn'] = '978-1-4932-2286-5';
item4['printDescription'] = function () {
    console.log(`${this.author}: ${this.name}`)
};

// @ Creating Object Properties and Object Methods via Helper Methods

// Adding new properties and methods via the Object.defineProperty() method
const item5 = {};
Object.defineProperty(item5, 'name', {
    value: 'JavaScript: The Comprehensive Guide'
});
Object.defineProperty(item5, 'price', {
    value: 59.95
});
Object.defineProperty(item5, 'author', {
    value: 'Philip Ackermann'
});
Object.defineProperty(item5, 'isbn', {
    value: '978-1-4932-2286-5'
});
Object.defineProperty(item5, 'printDescription', {
    value: function () {
        console.log(`${this.author}: ${this.name}`);
    }
});

console.log(item5.name); // "JavaScript: The Comprehensive Guide"
console.log(item5.price); // 59.95
console.log(item5.author); // "Philip Ackermann"
console.log(item5.isbn); // "978-1-4932-2286-5"

// Adding new properties and methods via  the Object.defineProperties() method
const item6 = {};
Object.defineProperties(item6, {
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

console.log(item6.name); // "JavaScript: The Comprehensive Guide"
console.log(item6.price); // 59.95
console.log(item6.author); // "Philip Ackermann"
console.log(item6.isbn); // "978-1-4932-2286-5"