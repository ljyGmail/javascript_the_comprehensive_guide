// 4.9.12 Splitting Strings
"use strict"

// Most Often, split() Is Probably Used to Split a String at a Particular Delimiter
const text = 'John,Doe,4711,45,180,80';
const result = text.split(',');
const firstName=result[0];
const lastName=result[1];
const id=result[2];
const age=result[3];
const height=result[4];
const weight=result[5];

console.log(firstName); // John
console.log(lastName); // Doe
console.log(id); // 4711
console.log(age); // 45
console.log(height); // 180
console.log(weight); // 80