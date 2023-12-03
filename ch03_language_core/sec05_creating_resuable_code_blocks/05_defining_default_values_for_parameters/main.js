// 3.5.5 Defining Default Values for Parameters
"use strict"

function createUser(username, email, password = 'DeFaUlTPaSsWoRd') {
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
const james = createUser('James Doe', 'james.doe@example.com');
console.log(james.username); // James Doe
console.log(james.email); // james.doe@example.com
console.log(james.password); // DeFaUlTPaSsWoRd

// The following shows how default values were (and still can be) implemented using ES5 methods.
function createUser2(username, email, password) {
    password = password !== undefined ? password : 'DeFaUlTPaSsWoRd';
    const user = {
        username: username,
        email: email,
        password: password
    }
    return user;
}

const john2 = createUser2('John Doe', 'john.doe@example.com', 'secret');
console.log(john2.username); // John Doe
console.log(john2.email); // john.doe@example.com
console.log(john2.password); // secret
const james2 = createUser2('James Doe', 'james.doe@example.com');
console.log(james2.username); // James Doe
console.log(james2.email); // james.doe@example.com
console.log(james2.password); // DeFaUlTPaSsWoRd
