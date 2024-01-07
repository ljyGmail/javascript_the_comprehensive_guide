// 8.2.8 Executing Functions in a Time-Controlled Manner - setTimeout()
"use strict"

// Executing a Function after Five Seconds
window.setTimeout(function () {
    console.log('Hello World');
}, 5000);

window.setTimeout(() => {
    console.log('Hello World');
}, 5000);

function printMessage() {
    console.log('Hello World');
}

window.setTimeout(printMessage, 5000);