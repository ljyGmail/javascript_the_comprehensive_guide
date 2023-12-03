// 3.5.9 Functions in Detail
"use strict"

// @ The Function Call Stack
function doSomething() {
    doSomethingB();
}

function doSomethingB() {
    doSomethingC();
}

function doSomethingC() {
    doSomethingD();
}

function doSomethingD() {

}

// @ Execution Contexts
// @@ Execution context of the global code

// @@ Execution context of a function call

// @@ Execution context of an eval() function call

// An execution context essentially specifies the following three things:
// @@ Scope
// @@ Scope chain
// @@ Context object

// an object method in which a property of the object is read vis this:
/*
const person = {
    name: 'John', // Object property
    getName: function () {
        return this.name;
    }
}

console.log(person.getName());
 */

// define a global function getNameGlobal():
// * The following code should be tested on browser environment
/*
function getNameGlobal() {
    return this.name;
}
console.log(getNameGlobal()); // undefined
 */

var name = "global name";

function getNameGlobal() {
    return this.name;
}

console.log(getNameGlobal()); // Output: global name

const person = {
    name: 'James',
    getName: getNameGlobal
};

const artist = {
    name: 'Kyuss',
    getName: getNameGlobal
};

console.log(person.getName()); // Output: James
console.log(artist.getName()); // Output: Kyuss
