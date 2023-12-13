// 4.5.2 Searching within a String
"use strict"

// @ Searching for the First Occurrence

// The indexOf() Method Can Be Used to Search for Characters and Strings within Another String
const name = 'Max Mustermann';
console.log(name.indexOf('M')); // Output: 0
console.log(name.indexOf('mann')); // Output: 10

// Optionally, the Second Argument of the indexOf() Method Can Be Used
// to Control from which Index in the String to Start the Search
console.log(name.indexOf('M', 2)); // Output: 4

// @ Searching for the Last Occurrence

// THe lastIndexOf() Method Searches for the First Occurrence Starting from the End of a String
console.log(name.lastIndexOf('M')); // Output: 4
console.log(name.lastIndexOf('M', 2)); // Output: 0