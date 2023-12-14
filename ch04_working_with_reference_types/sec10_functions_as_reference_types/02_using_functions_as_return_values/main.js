// 4.10.2 Using Functions as Return Values
"use strict"

// Functions as Return Values
function createAddFunction() {
    return function (x, y) {
        return x + y;
    }
}

const addFunction1 = createAddFunction();
const addFunction2 = createAddFunction();
console.log(addFunction1(22, 55)); // 77
console.log(addFunction2(33, 66)); // 99

// @ Chaining Function Calls

// Returned Functions Can Be Called Directly
function sayHello() {
    console.log('Hello');
    return function () {
        console.log('World');
        return function () {
            console.log('My name is John Doe.');
        }
    }
}

sayHello(); // Calling the "outer" function
// Output:
// "Hello"

sayHello()(); // Calling the "outer" and "middle" functions
// Output:
// "Hello"
// "World"

sayHello()()(); // Calling all functions
// Output:
// "Hello"
// "World"
// "My name is John Doe."

