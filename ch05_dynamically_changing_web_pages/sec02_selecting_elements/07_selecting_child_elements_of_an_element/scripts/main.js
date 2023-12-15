// 5.2.7 Selecting the Child Elements of an Element
"use strict"

// Accessing Child Nodes or Child Elements
const tbody = document.querySelector('tbody');
console.log(tbody.children.length); // 4
console.log(tbody.childElementCount); // 4
console.log(tbody.childNodes.length); // 9
console.log(tbody.hasChildNodes()); // true

// Accessing Specific Child Nodes and Child Elements
console.log(tbody.firstChild); // Text node
console.log(tbody.lastChild); // Text node
console.log(tbody.firstElementChild); // <tr>
console.log(tbody.lastElementChild); // <tr>