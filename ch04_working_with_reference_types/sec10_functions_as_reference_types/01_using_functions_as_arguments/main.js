// 4.10.1 Using Functions as Arguments
"use strict"

// Passing Functions as Arguments of Another Function

// Definition of the function that expects another function as an argument
function function1(f) {
    console.log('Function 1 start');
    // Calling the passed function
    f();
    console.log('Function 1 end');
}

function function2() {
    console.log('Function 2 start');
    console.log('Function 2 end');
}

// Call with a function using its name
function1(function2);
// function1(function2()); // THis does not work.

// Call with an anonymous function as an argument
function1(function () {
    console.log('Anonymous function start');
    console.log('Anonymous function end');
});

// @ Usage Example: Calling Functions for All Elements of an Array

// Passing a Function as a Parameter
const numbers = [2, 3, 4, 5];

function every(array, f) {
    for (let i = 0; i < array.length; i++) {
        f(array[i]);
    }
}

function print(item) {
    console.log(`Item: ${item}`);
}

const printModulo = (item) => {
    console.log(`${item} % 2 = ${item % 2}`);
};

every(numbers, print);
// Output:
// Item: 2
// Item: 3
// Item: 4
// Item: 5

every(numbers, printModulo);
// Output:
// 2 % 2 = 0
// 3 % 2 = 1
// 4 % 2 = 0
// 5 % 2 = 1

// @@ The forEach() Method

// The forEach() Method of Arrays Executes a Function Passed to It for Each Element in the Array
function modulo(item) {
    console.log(item + ' % 2 = ' + (item % 2));
}

numbers.forEach(print);
numbers.forEach(modulo);