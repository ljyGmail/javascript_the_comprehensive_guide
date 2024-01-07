// 8.2.8 Executing Functions in a Time-Controlled Manner - setInterval()
"use strict"

// Executing a Function Every Five Seconds
window.setInterval(function () {
    console.log('Hello World');
}, 5000);

window.setInterval(() => {
    console.log('Hello World');
}, 5000);

function printMessage() {
    console.log('Hello World');
}

window.setInterval(printMessage, 5000);ZZ
