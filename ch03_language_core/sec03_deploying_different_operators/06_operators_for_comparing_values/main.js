// 3.3.6 Operators for Comparing Values
"use strict"

// Nonstrict Comparison
console.log(false == 0); // Output: true
console.log(false == 1); // Output: false
console.log(true == 1); // Output: true
console.log(true == 0); // Output: false
console.log("4711" == 4711); // Output: true
console.log(false != 0); // Output: false
console.log(false != 1); // Output: true
console.log(true != 1); // Output: false
console.log(true != 0); // Output: true
console.log("4711" != 4711); // Output: false

// Strict Comparison
console.log(false === 0); // Output: false
console.log(false === 1); // Output: false
console.log(true === 1); // Output: false
console.log(true === 0); // Output: false
console.log("4711" === 4711); // Output: false
console.log(false !== 0); // Output: true
console.log(false !== 1); // Output: true
console.log(true !== 1); // Output: true
console.log(true !== 0); // Output: true
console.log("4711" !== 4711); // Output: true