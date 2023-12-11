// 4.3.8 Using Arrays as a Queue
"use strict"

// Simple Example of Using an Array as a Queue
const queue = []; // Declaration of a normal array
queue.push(1); // Add one element ...
queue.push(2); // ... and another one ...
queue.push(3); // ... and another one ...
queue.push(4, 5, 6, 7, 8); // ... and several in one go
console.log(queue.shift()); // Return the element that was added first: 1.