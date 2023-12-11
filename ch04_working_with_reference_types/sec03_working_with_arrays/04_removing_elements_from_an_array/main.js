// 4.3.4 Removing Elements from an Array
"use strict"

// @ Removing the Last Element from an Array

// The pop() Method Removes the Last Element from an Array
const todoList = [
    'Clean bathroom',
    'Go shopping',
    'Tidy up',
    'Mow lawn'
];

const item1 = todoList.pop();
console.log(item1); // Output: Mow lawn
const item2 = todoList.pop();
console.log(item2); // Output: Tidy up
const item3 = todoList.pop();
console.log(item3); // Output: Go shopping
const item4 = todoList.pop();
console.log(item4); // Output: Clean bathroom
const item5 = todoList.pop();
console.log(item5); // Output: undefined

// @ Removing the First Element from an Array

// The shift() Method Removes the First Element from an Array
const todoList2 = [
    'Clean bathroom',
    'Go shopping',
    'Tidy up',
    'Mow lawn'
];

const item6 = todoList2.shift();
console.log(item6); // Output: Clean bathroom
const item7 = todoList2.shift();
console.log(item7); // Output: Go shopping
const item8 = todoList2.shift();
console.log(item8); // Output: Tidy up
const item9 = todoList2.shift();
console.log(item9); // Output: Mow lawn
const item10 = todoList2.shift();
console.log(item10); // Output: undefined

// @ Removing Some of the Elements from an Array

// The splice() Method Can Be Used to Delete Elements from an Array
const todoList3 = [
    'Clean bathroom',
    'Go shopping',
    'Tidy up',
    'Mow lawn'
];

const deletedTodos = todoList3.splice(1,2);
console.log(deletedTodos); // [ 'Go shopping', 'Tidy up' ]
console.log(todoList3); // [ 'Clean bathroom', 'Mow lawn' ]