// 5.4.3 The Different Types of HTML Elements
"use strict"

function init() {
    (function () {
        // Each HTML Element is Represented by Its Own Object Type
        const table = document.querySelector('table');
        console.log(Object.getPrototypeOf(table)); // HTMLTableElement
        console.log(table.caption); // null
        console.log(table.tHead); // thead
        console.log(table.tBodies); // [tbody]
        console.log(table.rows); // [tr, tr, tr, tr, tr]
        console.log(table.tFoot); // null

        // The Different Object Types Also Have Individual Methods
        const newRow = table.insertRow(1);
        const newCellFirstName = newRow.insertCell(0);
        newCellFirstName.textContent = 'Bob';
        const newCellLastName = newRow.insertCell(1);
        newCellLastName.textContent = 'Doe';
        const newCellEmail = newRow.insertCell(2);
        newCellEmail.textContent = 'bob.doe@javascripthandbook.en';
    })();
}

document.addEventListener('DOMContentLoaded', init);