// 3.5.7 Defining Functions Using Short Notation
"use strict"

// (parameters) => {function body}

const sum = (x, y) => {
    return x + y;
};

// ... is the same as ...
const sum2 = function (x, y) {
    return x + y;
}

// because this example has only one statement within the function body,
// braces and keyword return can be omitted:
const sum3 = (x, y) => x + y;

// For functions with one parameter, the parentheses around this parameter can also be omitted.
const showMessage = message => console.log(message);

// For functions without parameters, an empty pair of parentheses would be used.
const printHelloWorld = () => console.log('Hello world');

// If you want omit the braces from an arrow function but still return an object,
// the object must be written in parentheses in order to prevent the object's braces
// from being misinterpreted as the function body:
const createUser = (username, email, password) =>
    (
        {
            username: username,
            email: email,
            password: password
        }
    );

// ... is the same as ...
function createUser2(username, email, password) {
    const user = {
        username: username,
        email: email,
        password: password
    };
    return user;
}