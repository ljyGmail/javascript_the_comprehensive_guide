// 5.4.2 Removing Elements and Nodes
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

function createTable() {
    const tableBody = document.querySelector('#contact-table tbody');

    for (let i = 0; i < contacts.length; i++) {
        // Create a table row
        const tableRow = document.createElement('tr');

        const contact = contacts[i];

        // Create table cells for each contact property
        const tableCellFirstName = document.createElement('td')
        const firstName = document.createTextNode(contact.firstName);
        tableCellFirstName.appendChild(firstName);

        const tableCellLastName = document.createElement('td')
        const lastName = document.createTextNode(contact.lastName);
        tableCellLastName.appendChild(lastName);

        const tableCellEmail = document.createElement('td')
        const email = document.createTextNode(contact.email);
        tableCellEmail.appendChild(email);

        tableRow.appendChild(tableCellFirstName);
        tableRow.appendChild(tableCellLastName);
        tableRow.appendChild(tableCellEmail);

        tableBody.appendChild(tableRow);
    }
}

// Example of Using the removeChild() Method
function sortByFirstName() {
    // remove all rows from the table
    const tableBody = document.querySelector('#contact-table tbody');
    while (tableBody.firstChild !== null) {
        tableBody.removeChild(tableBody.firstChild);
    }

    // sort the contact array by firstname
    contacts.sort(function (contact1, contact2) {
        return contact1.firstName.localeCompare(contact2.firstName);
    });

    // create the table again
    createTable();
}