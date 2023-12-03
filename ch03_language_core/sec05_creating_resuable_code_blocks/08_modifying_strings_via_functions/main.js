// 3.5.8 Modifying Strings via Functions
"use strict"

function tagFunction(strings, ...replacements) {
    console.log(strings);
    console.log(replacements);
    const name = replacements[0];
    const age = replacements[1];
    if (age > 80) {
        return `${strings[0]}${replacements[0]}.`;
        // --> "My name is John Doe."
    }
    return `${strings[0]}${name}${strings[1]}${age}${strings[2]}.`;
    // --> "My name is JohnDoe, I am 44 years old."
}

const name = 'John Doe';
let age = 44;

let message = tagFunction`My name is ${name}, I am ${age} years old`;
console.log(message);
// My name is John Doe, I am 44 years old.

age = 88;
message = tagFunction`My name is ${name}, I am ${age} years old`;
console.log(message);
// My name is John Doe.