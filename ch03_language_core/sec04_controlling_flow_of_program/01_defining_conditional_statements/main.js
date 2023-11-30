// 3.4.1 Defining Conditional Statements
"use strict"

const condition = true;
if (condition) {
    // Program code to be executed if condition is met
}

const useIsLoggedIn = true;
const userName = 'Harry';
if (useIsLoggedIn) {
    document.getElementById('message').textContent = 'Welcome, ' + userName;
}

if (condition)
    // Program code to be executed if condition is met
    console.log('executed')
