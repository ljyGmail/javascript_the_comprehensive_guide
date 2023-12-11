// 4.3.9 Finding Elements in Arrays
"use strict"

// @ Searching from the Beginning of the Array

// The indexOf() Method Enables You to Search for Elements within an Array
const transactions = [
    -20.0, 500.50, -40.0, -34.50, 200, 500.50, -20, 200
];

console.log(transactions.indexOf(-20.0)); // Output: 0
console.log(transactions.indexOf(500)); // Output: -1
console.log(transactions.indexOf(200)); // Output: 4
console.log(transactions.indexOf(200, 5)); // Output: 7

// @ Searching from the End of the Array

// The lastIndexOf() Method Enables You to Search for Elements within an Array Starting from the End
console.log(transactions.lastIndexOf(-20)); // Output: 6
console.log(transactions.lastIndexOf(500)); // Output: -1
console.log(transactions.lastIndexOf(200)); // Output: 7
console.log(transactions.lastIndexOf(200, 5)); // Output: 4

// @@ Another Method for Arrays

// Simple Check of whether an Array Contains a Certain Element
console.log([4, 5, 6].includes(4)); // true
console.log([2, 7, 8].includes(4)); // false
console.log(['John', 'James'].includes('Peter')); // false
console.log(['John', 'James'].includes('James')); // true
console.log([4, 5, 6, 2711, 50, 87].includes(6, 2)); // true
console.log([4, 5, 6, 2711, 50, 87].includes(6, 4)); // false

// @ Searching Elements by Search Criterion

// The find() and findIndex() Methods Use a Search Criterion
// to Find the First Occurrence That Matches the Search Criterion
const result = [2, 3, 4, 5, 6, 7, 2, 3, 4, 5]
    .find(element => element % 2 !== 0);
console.log(result); // 3

const result2 = [2, 3, 4, 5, 6, 7, 2, 3, 4, 5]
    .findIndex(element => element % 2 !== 0);
console.log(result2); // 1