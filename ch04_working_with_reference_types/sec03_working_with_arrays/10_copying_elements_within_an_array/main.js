// 4.3.10 Copying Elements within an Array
"use strict"

// Using copyWithin(), Elements Can Be Copied within an Array
const todoList = [
    'Clean bathroom',
    'Go shopping',
    'Tidy up',
    'Mow lawn'
];

todoList.copyWithin(
    0, // target start position to which the elements will be copied
    2, // source start position from which the elements are copied
    4 // source end position to which the elements are copied
);

console.log(todoList); // [ 'Tidy up', 'Mow lawn', 'Tidy up', 'Mow lawn' ]