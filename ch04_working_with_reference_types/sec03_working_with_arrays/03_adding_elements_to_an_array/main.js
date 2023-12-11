// 4.3.3 Adding Elements to an Array
"use strict"

// @ Adding an Element to the End of an Array

// Adding Elements to an Array via the push() Method
const todoList = [];
let length;
length = todoList.push('Clean bathroom');
console.log(length); // 1
length = todoList.push('Go shopping');
console.log(length); // 2
length = todoList.push('Tidy up', 'Mow lawn')
console.log(length); // 4
console.log(todoList); // [ 'Clean bathroom', 'Go shopping', 'Tidy up', 'Mow lawn' ]

// @ Adding an Element to the Beginning of an Array

// Adding Elements to an Array Using the unshift() Method
const todoList2 = [];
let length2;
length2 = todoList2.unshift('Clean bathroom');
console.log(length2); // 1
length2 = todoList2.unshift('Go shopping');
console.log(length2); // 2
length2 = todoList2.unshift('Tidy up', 'Mow lawn');
console.log(length2); // 4
console.log(todoList2); // [ 'Tidy up', 'Mow lawn', 'Go shopping', 'Clean bathroom' ]

// @ Inserting Elements at Any Position in the Array

// Adding Elements to an Array Using the splice() Method
const todoList3 = [
    'Clean bathroom',
    'Go shopping',
    'Tidy up',
    'Mow lawn'
];

todoList3.splice(
    2, // Index from which to insert elements
    0, // Number of elements to be deleted
    'Paint garage' // Element to be added
);

console.log(todoList3);
// [
//     'Clean bathroom',
//     'Go shopping',
//     'Paint garage',
//     'Tidy up',
//     'Mow lawn'
// ]

todoList3.splice(
    2, // Index from which to insert elements
    0, // Number of elements to be deleted
    'Lay sod', // Elements to be ...
    'Lay out vegetable garden' // ... added
);

console.log(todoList3);
// [
//     'Clean bathroom',
//     'Go shopping',
//     'Lay sod',
//     'Lay out vegetable garden',
//     'Paint garage',
//     'Tidy up',
//     'Mow lawn'
// ]