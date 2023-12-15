// 5.2.8 Selecting the Sibling Elements of an Element
"use strict"

// Accessing Specific Sibling Nodes and Sibling Elements
const tableRow = document.querySelector('tbody tr:nth-child(2)');
console.log(tableRow.previousSibling); // Text node
console.log(tableRow.nextSibling);  // Text node
console.log(tableRow.previousElementSibling); // <tr>
console.log(tableRow.nextElementSibling); // <tr>