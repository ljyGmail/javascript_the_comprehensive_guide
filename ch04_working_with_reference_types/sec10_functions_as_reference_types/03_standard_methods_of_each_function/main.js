// 4.10.3 Standard Methods of Each Function
"use strict"

// @ Binding Object Using the bind() Method

// If an Object Method is Used Outside an Object, this No Longer Refers to the Object
const button = {
    handler: null,
    // Function that expects a callback handler
    onClick: function (handler) {
        this.handler = handler;
    },
    click: function () {
        this.handler();
    }
};

const handler = {
    log: function () {
        console.log("Button clicked.");
    },
    // Object method registered as a callback handler further below
    handle: function () {
        this.log();
    }
}

// Register callback handler
// button.onClick(handler.handle);
// Implicit activation of the callback handler
// button.click(); // TypeError: this.log is not a function

// The bind() Method Enables You to Define the Execution Context of a Function
button.onClick(handler.handle.bind(handler));
button.click();

// Explicit Assignment of the Bound Function to a Variable
const boundFunction = handler.handle.bind(handler);
button.onClick(boundFunction);
button.click();

// @@ Note

// Anonymous Functions Are Often an Alternative to Functions That Are Passed Directly
button.onClick(function () {
    handler.handle();
})
button.click();

// @ Calling Functions via the call() Method

// Because the arguments Object Is Not a Real Array, It Does Not Provide the forEach() Method
function logNames() {
    console.log(arguments); // Output: { '0': 'John', '1': 'Doe' }
    /* Error: arguments is not an array
    arguments.forEach(function (argument) {
        console.log(argument);
    });
     */
}

logNames('John', 'Doe');

// Iteration over the Array-Like arguments Object by Borrowing the forEach() Metho
function logNames2() {
    Array.prototype.forEach.call(arguments, function (argument) {
        console.log(argument)
    });
}

logNames2('John', 'Doe');

// @ Calling Functions via the apply() Method

// The apply() Method Works Similarly to call() but Expects an Array
// as a Second Argument instead of Individual Values
function logNames3() {
    Array.prototype.forEach.apply(arguments, [function (argument) {
        console.log(argument);
    }]);
}

logNames3('John', 'James');