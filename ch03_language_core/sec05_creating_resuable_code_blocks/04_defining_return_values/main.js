// 3.5.4 Defining Return Values
"use strict"

function sum(x, y) {
    const result = x + y; // Add the two passed parameters
    return result; // Return result
}

// Alternatively, the intermediate variable can be omitted:
function sum2(x, y) {
    return x + y;
}

const resultOne = sum(5, 5);
const resultTwo = sum(8, 8);
console.log(resultOne); // 10
console.log(resultTwo); // 16

// a function that returns an object
function createUser(username, email, password) {
    const user = {
        username: username,
        email: email,
        password: password
    }
    return user;
}

const john = createUser('John Doe', 'john.doe@example.com', 'secret');
console.log(john.username); // John Doe
console.log(john.email); // john.doe@example.com
console.log(john.password); // secret