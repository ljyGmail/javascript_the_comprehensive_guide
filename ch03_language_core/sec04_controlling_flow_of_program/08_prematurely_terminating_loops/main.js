// 3.4.8 Prematurely Terminating Loops and Loop Iterations
"use strict"

// @ Prematurely Terminating Loops
const numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
console.log('Before the loop.');
for (let i = 0; i < numbers.length; i++) { // Iterate over ...
    const number = numbers[i]; // ... the number array.
    if (number % 2 === 1) { // If a number is odd ...
        console.log('Odd number found.'); // ... output message ...
        break; // ... and terminate the loop.
    } // Otherwise ...
    console.log(number); // ... output the number.
}
console.log('After the loop.');

// the same example using a head-controlled loop
console.log('Before the loop.');
let j = 0; // Initialize counter variable.
while (j < numbers.length) { // Iterate over ...
    const number = numbers[j]; // the number array.
    if (number % 2 === 1) { // If a number is odd ...
        console.log('Odd number found.'); // ... output message ...
        break; // ... and terminate the loop.
    } // Otherwise ...
    console.log(number); // ... output the number ...
    j++; // ... and increment the counter variable.
}
console.log('After the loop.');

// @ Prematurely Terminating Loop Iterations
console.log('Before the loop.');
for (let i = 0; i < numbers.length; i++) { // Iterator over ...
    const number = numbers[i]; // ... the number array.
    if (number % 2 === 1) { // If a number is odd ...
        console.log('Odd number found.'); // ... output message ...
        continue; // ... and abort the loop iteration.
    } // Otherwise ...
    console.log(number); // ... output the number.
}
console.log('After the loop.');

// @ Infinite Loops
/*
console.log('Before the loop.');
let k = 0; // Initialize counter variable.
while (k < numbers.length) { // Iterator over ...
    const number = numbers[k]; // ... the number array.
    if (number % 2 === 1) { // If a number is odd ...
        console.log('Odd number found.') // ... output message ...
        continue; // ... and abort the loop iteration.
    } // Other ...
    console.log(number); // ... output the number and ...
    k++; // increment the counter variable.
}
*/

// solve the above problem
console.log('Before the loop.');
let l = 0; // Initialize counter variable.
while (l < numbers.length) { // Iterator over number array.
    const number = numbers[l]; // Assign respective number.
    l++; // increment the counter variable.
    if (number % 2 === 1) { // If a number is odd ...
        console.log('Odd number found.') // ... output message ...
        continue; // ... and abort the loop iteration.
    } // Other ...
    console.log(number); // ... output the number and ...
}

// @ Defining Jump Labels
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    for (let m = i + 1; m < numbers.length; m++) {
        const number2 = numbers[m];
        console.log(`Compare ${number} with ${number2}`);
        if (number === number2) {
            console.log('Same numbers found');
            continue;
        }
    }
}

console.log("##########");

outerLoop:
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        innerLoop:
            for (let m = i + 1; m < numbers.length; m++) {
                const number2 = numbers[m];
                console.log(`Compare ${number} with ${number2}`);
                if (number === number2) {
                    console.log('Same numbers found');
                    continue outerLoop;
                }
            }
    }

console.log("##########");

outerLoop:
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        innerLoop:
            for (let m = i + 1; m < numbers.length; m++) {
                const number2 = numbers[m];
                console.log(`Compare ${number} with ${number2}`);
                if (number === number2) {
                    console.log('Same numbers found');
                    break outerLoop;
                }
            }
    }