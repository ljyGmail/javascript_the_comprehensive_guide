// 4.3.6  Sorting Arrays
"use strict"

// @ Reversing the Order of Elements of an Array

// Reversing the Order of Elements in an Array
const names = ['John', 'James', 'Peter'];
names.reverse();
console.log(names);

// @ Sorting the Elements in an Array According to Specific Criteria

// Basic Structure of a Comparison Function
function compare(value1, value2) {
    if (value1 < value2) {
        return -1; // The first value is smaller than the second value.
    } else if (value1 > value2) {
        return 1; // The first value is greater than the second value.
    } else {
        return 0; // Both values are of equal size.
    }
}

// Sorting with Your Own Comparison Function
const values = [7, 6, 4, 8, 7, 2, 4];
values.sort(compare);
console.log(values); // [ 2, 4, 4, 6, 7, 7, 8 ]

// @ Sorting Objects in Arrays

// Sorting Objects within an Array
const contacts = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@javascripthandbook.en'
    },
    {
        firstName: 'James',
        lastName: 'Dean',
        email: 'superjames@javascripthandbook.en'
    },
    {
        firstName: 'Peter',
        lastName: 'Dickens',
        email: 'dickens@javascripthandbook.en'
    },
];

function compareByFirstName(contact1, contact2) {
    return contact1.firstName.localeCompare(contact2.firstName);
}

function compareByLastName(contact1, contact2) {
    return contact1.lastName.localeCompare(contact2.lastName);
}

function compareByEmail(contact1, contact2) {
    return contact1.email.localeCompare(contact2.email);
}

contacts.sort(compareByFirstName); // sort by first name
console.log(contacts[0].firstName); // James
console.log(contacts[1].firstName); // John
console.log(contacts[2].firstName); // Peter
console.log(contacts);
contacts.sort(compareByLastName); // sort by last name
console.log(contacts[0].lastName); // Dean
console.log(contacts[1].lastName); // Dickens
console.log(contacts[2].lastName); // Doe
console.log(contacts);
contacts.sort(compareByEmail); // sort by email address
console.log(contacts[0].email); // dickens@javascripthandbook.en
console.log(contacts[1].email); // john.doe@javascripthandbook.en
console.log(contacts[2].email); // superjames@javascripthandbook.en
console.log(contacts);