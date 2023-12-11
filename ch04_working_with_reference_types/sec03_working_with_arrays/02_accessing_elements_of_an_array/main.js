// 4.3.2 Accessing Elements of an Array
"use strict"

// Accessing Individual Elements of an Array by Index
const todoList = [
    'Clean bathroom', // element at index 0
    'Go shopping', // element at index 1
    'Tidy up', // element at index 2
    'Mow lawn' // element at index 3
];

console.log(todoList[0]); // "Clean bathroom"
console.log(todoList[1]); // "Go shopping"
console.log(todoList[2]); // "Tidy up"
console.log(todoList[3]); // "Mow lawn"
console.log(todoList[4]); // undefined

// Accessing Individual Elements of an Array via Loop and Index
for (let i = 0; i < todoList.length; i++) {
    console.log(todoList[i]);
}