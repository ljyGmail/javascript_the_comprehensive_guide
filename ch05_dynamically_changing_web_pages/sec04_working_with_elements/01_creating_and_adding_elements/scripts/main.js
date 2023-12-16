// 5.4.1 Creating and Adding Elements
"use strict"

const contacts = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@javascripthandbook.en'
    },
    {
        firstName: 'James',
        lastName: 'Doe',
        email: 'james.doe@javascripthandbook.en'
    },
    {
        firstName: 'Petter',
        lastName: 'Doe',
        email: 'petter.doe@javascripthandbook.en'
    }
];

// Creating a Table Based on the Contact List
function createTable() {
    const tableBody = document.querySelector('#contact-table tbody');
    for (let i = 0; i < contacts.length; i++) {
        // For te current contact ...
        const contact = contacts[i];
        // ... a new line is created
        const tableRow = document.createElement('tr');
        // Within the row, different cells are created ...
        const tableCellFirstName = document.createElement('td');
        // ... and filled with values.
        const firstName = document.createTextNode(contact.firstName);
        tableCellFirstName.appendChild(firstName);

        const tableCellLastName = document.createElement('td');
        const lastName = document.createTextNode(contact.lastName);
        tableCellLastName.appendChild(lastName);

        const tableCellEmail = document.createElement('td');
        const email = document.createTextNode(contact.email);
        tableCellEmail.appendChild(email);

        tableRow.appendChild(tableCellFirstName);
        tableRow.appendChild(tableCellLastName);
        tableRow.appendChild(tableCellEmail);

        tableBody.appendChild(tableRow);
    }
}