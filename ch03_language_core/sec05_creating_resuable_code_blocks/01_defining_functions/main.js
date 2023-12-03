// 3.5.1 Defining Functions
"use strict"

// @ Defining Functions Using a Function Declaration
function showMessage() {
    console.log('Welcome');
}

// @ Defining Functions Using a Function Expression
const showMessage2 = function () {
    console.log('Welcome2');
}
showMessage2();

// @ Function Declarations versus Function Expressions
// In the case of function expression, they are called via the variable to which the function has been assigned.
const showMessage3 = function showMessageFuntionName() {
    console.log('Welcome3');
}
showMessage3();
// showMessageFuntionName(); // Function call not possible

// Function expressions are processed by the interpreter only when it encounters the corresponding statement.
// So such functions can only be used in the statements after that.

// showMessage4(); // Function call not possible, this statement produces an error.
const showMessage4 = function () {
    console.log('Welcome4');
}


// With function declarations, the  interpreter ensures that the corresponding functions
// are also available before the declaration and can thus be called in statements before it.
showMessage5(); // Function call possible

function showMessage5() {
    console.log('Welcome5');
}

// @@ Creating Functions via a constructor Function (rarely used)
const sum = new Function('x', 'y', 'return x + y');
console.log(sum(7, 8));

// @@ Strict Mode
function showMessage6() {
    'use strict'
    const message = 'Welcome6';
    console.log(message);
}

showMessage6();
