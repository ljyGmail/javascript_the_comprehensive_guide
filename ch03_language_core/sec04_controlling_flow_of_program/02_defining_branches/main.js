// 3.4.2 Defining Branches
"use strict"

const condition = true;

if (condition) {
    // Program code to be executed if condition is met
} else {
    // Program code to be executed if condition is not met
}

function displayLoginForm() {
    console.log("login form")
}

const userIsLoggedIn = true;
if (userIsLoggedIn) {
    document.getElementById('message').textContent = 'Welcome, you';
} else {
    displayLoginForm();
}

// @ Testing Multiple Conditions
const condition1 = true;
const condition2 = false;

if (condition1) {
    // Program branch that will be executed if condition1 is met
} else if (condition2) {
    // Program branch that will be executed if condition2 is met
} else {
    // Program branch that will be executed if none of the previous conditions is met
}

// The number of else-if statements is arbitrary
const condition3 = true;
const condition4 = false;

if (condition1) {
    // Program branch that will be executed if condition1 is met
} else if (condition2) {
    // Program branch that will be executed if condition2 is met
} else if (condition3) {
    // Program branch that will be executed if condition3 is met
} else if (condition4) {
    // Program branch that will be executed if condition4 is met
} else {
    // Program branch that will be executed if none of the previous conditions is met
}

// the closing else statement can be omitted
if (condition1) {
    // Program branch 1
} else if (condition2) {
    // Program branch 2
}

const age = prompt('For what age are you looking for file tips?');
if (age >= 18) {
    console.log('Show files with a rating of G, PG, PG-13, R, and NC-17.');
} else if (age >= 17) {
    console.log('Show files with a rating of G, PG, PG-13, and R.');
} else if (age >= 13) {
    console.log('Show films with a rating of G, PG, and PG-13.');
} else if (age >= 6) {
    console.log('Show films with a rating of G and PG.')
}

// the order of conditions is crucial:
if (age >= 6) {
    console.log('Show films with a rating of G and PG.')
} else if (age >= 13) {
    console.log('Show films with a rating of G, PG, and PG-13.'); // unreachable
} else if (age >= 17) {
    console.log('Show files with a rating of G, PG, PG-13, and R.'); // unreachable
} else if (age >= 18) {
    console.log('Show files with a rating of G, PG, PG-13, R, and NC-17.'); // unreachable
}

// @ Using More Complex Conditions
const userIsAdmin = false;
if (userIsLoggedIn && userIsAdmin) {
    /* ... */
}

// @ Nesting Branches
if (!isNaN(parseFloat(age)) && isFinite(age)) {
    if (age >= 18) {
        console.log('Show films with a rating of G, PG, PG-13, R, and NC-17.')
    } else if (age >= 17) {
        console.log('Show films with a rating of G, PG, PG-13, and R.');
    } else if (age >= 13) {
        console.log('Show films with a rating of G, PG, and PG-13.');
    } else if (age >= 6) {
        console.log('Show films with a rating of G and PG.');
    }
} else {
    console.error('Invalid age entered.');
}