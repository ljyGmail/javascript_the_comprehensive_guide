// 4.3.11 Converting Arrays to Strings
"use strict"

// Converting an Array in a String
const names = ['John', 'James', 'Peter'];
const namesString = names.toString();
console.log(namesString); // Output: John,James,Peter
const namesLocaleString = names.toLocaleString();
console.log(namesLocaleString); // Output: John,James,Peter
const namesValue = names.valueOf();
console.log(namesValue); // [ 'John', 'James', 'Peter' ]
const namesJoined = names.join('-');
console.log(namesJoined); // Output: John-James-Peter