// 4.1.3 Primitive Data Types and Reference Types as Function Arguments
"use strict"

// For function calls with primitive data types:
function example(x) {
    console.log(`x: ${x}`);
    x = 5;
    console.log(`x: ${x}`);
}

let y = 4711;
console.log(`y: ${y}`);
example(y);
console.log(`y: ${y}`);

// For function calls with reference types:
function example2(x) {
    console.log(`x.value: ${x.value}`);
    x.value = 5;
    console.log(`x.value: ${x.value}`);
}

let z = {
    value: 4711
};
console.log(`z.value: ${z.value}`);
example2(z);
console.log(`z.value: ${z.value}`);