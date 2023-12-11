// 4.3.7 Using Arrays as a Stack
"use strict"

// Simple Examples of Using an Array as a Stack
const stack = []; // Declaration of a normal array
stack.push(1); // Add one element ...
stack.push(2); // ... and another one ...
stack.push(3); // ... and another one ...
stack.push(4, 5, 6, 7, 8); // ... and several in one go
console.log(stack.pop()); //  Return the element that was added last: 8.