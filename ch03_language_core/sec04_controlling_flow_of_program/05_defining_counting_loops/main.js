// 3.4.5 Defining Counting Loops
"use strict"

// @ Counting Loop Structure

// @ Example: Output of the Numbers 1 to 10
for (
    let i = 1; // Initialization: will be executed before the loop is excuted
    i <= 10; // Condition: is checked before executing an iteration
    i++ // Increment expression: is executed at the end of an iteration
) { // Loop bodyL executed once in each iteration
    console.log(i);
}

// @ Real-Life Example: Generating Values in a Pick List

// @ Nested Counting Loops
// output loop
for (let i = 1; i < 11; i++) {
    // inner loop
    for (let j = 1; j < 11; j++) {
        console.log(`i has the value "${i}", j has the value "${j}"`);
    }
}

// @ Real-Life Example: Output of the Elements of Multidimensional Arrays
const coordinates = [
    [50.69, 8.94],
    [54.29, 11.97],
    [55.38, 12.88],
    [60.78, 9.94],
    [62.29, 7.69],
    [70.34, 8.24],
    [72.59, 11.29],
    [80.69, 8.56]
];

for (let i = 0; i < coordinates.length; i++) {
    const coordinate = coordinates[i];
    for (let j = 0; j < coordinate.length; j++) {
        console.log(coordinate[j]);
    }
}





