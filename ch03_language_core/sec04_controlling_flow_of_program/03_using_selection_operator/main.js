// 3.4.3 Using the Selection Operator
"use strict"

const age = prompt('Please enter your age.');
let isAtLeast18;
if (age >= 18) {
    isAtLeast18 = true;
} else {
    isAtLeast18 = false;
}

// if an initial value is assigned, else part can be ommitted.
isAtLeast18 = false;
if (age >= 18) {
    isAtLeast18 = true;
}

isAtLeast18 = age > 18 ? true : false;

const message = isAtLeast18 ? 'Over 18' : 'Under 18';