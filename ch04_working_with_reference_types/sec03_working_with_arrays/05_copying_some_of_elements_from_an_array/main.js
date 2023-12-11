// 4.3.5 Copying Some of the Elements from an Array
"use strict"

// The slice() Method Can Be Used to Extract Parts of an Array
const todoList = [
    'Clean bathroom',
    'Go shopping',
    'Tidy up',
    'Mow lawn'
];

const sliced1 = todoList.slice(1); // starting from second element
console.log(sliced1); // [ 'Go shopping', 'Tidy up', 'Mow lawn' ]

const sliced2 = todoList.slice(2); // starting from third element
console.log(sliced2); // [ 'Tidy up', 'Mow lawn' ]

const sliced3 = todoList.slice(0, 2); // first and second element
console.log(sliced3);  // [ 'Clean bathroom', 'Go shopping' ]

const sliced4 = todoList.slice(2, 4); // third and fourth element
console.log(sliced4); // [ 'Tidy up', 'Mow lawn' ]

// Original array remains unchanged:
console.log(todoList); // [ 'Clean bathroom', 'Go shopping', 'Tidy up', 'Mow lawn' ]

// The Behavior of slice() Can be Further Controlled by Specifying Negative Parameters
const sliced5 = todoList.slice(-2); // the last two elements
const sliced6 = todoList.slice(1, // the second element from the beginning to ...
    -1); // ... the second element from the end
const sliced7 = todoList.slice(1, // the second element from the beginning to ...
    -2); // ... the third element from the end
const sliced8 = todoList.slice(1, // the second element from the beginning to ...
    -3); // ... the fourth element from the end

console.log(sliced5); // [ 'Tidy up', 'Mow lawn' ]
console.log(sliced6); // [ 'Go shopping', 'Tidy up' ]
console.log(sliced7); // [ 'Go shopping' ]
console.log(sliced8); // []