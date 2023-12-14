// 4.8.1 Working with Date and Time Information
"use strict"

// Access to the Individual Components of a Date/Time Object
const today = new Date();
console.log(today.getMonth()); // Returns the current month (0-11).
console.log(today.getFullYear()); // Returns the year in the format YYYY.
console.log(today.getDate()); // Returns the current day in the month (1-31).
console.log(today.getDay()); // Returns the day of the week (starts on Sunday with 0).
console.log(today.getHours()); // Returns the current hour of the day (0-23).
console.log(today.getTime());  // Returns the milliseconds since 1/1/1970.

// The Different Ways to Create a Date Object
const date1 = new Date(); // current date and time

const date2 = new Date(1438654000000); // date based on milliseconds

const date3 = new Date("02 08 2021"); // dated based on string

const date4 = new Date( // date based on ...
    2021,       // ... year...
    8,      // ... month ...
    15,         // ... day ...
    17,         // ... hours ...
    36,         // ... minutes ...
    30,         // ... seconds ...
    30              // ... and miliseconds
);