// 3.5.6 Using Elements  from an Array as Parameters
"use strict"

// Option 1: Access individual values of the array
function createUser(username, email, password) {
    const user = {
        username: username,
        email: email,
        password: password
    }
    return user;
}

const userData1 = ['John Doe', 'john.doe@example.com', 'secret'];
const userData2 = ['James Doe', 'james.doe@example.com', 'password'];
const john = createUser(
    userData1[0],
    userData1[1],
    userData1[2]
);
const james = createUser(
    userData2[0],
    userData2[1],
    userData2[2]
);
console.log(john);
console.log(james);

// Option 2: use the apply() method (an advanced technique introduced in Chapter 4)

// Option 3: use the spread operator
const john2 = createUser(
    ...userData1
);
const james2 = createUser(
    ...userData2
);
console.log(john2);
console.log(james2);