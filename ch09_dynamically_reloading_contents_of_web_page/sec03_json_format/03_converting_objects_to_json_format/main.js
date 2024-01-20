// 9.3.3 Converting Objects to JSON Format
"use strict"

// Converting a JavaScript Object to JSON Format
const object = {
    "artists": [
        {
            "name": "Kyuss",
            "albums": [
                {
                    "title": "Wretch",
                    "year": 1991
                },
                {
                    "title": "Blues for the Red Sun",
                    "year": 1992
                },
                {
                    "title": "Welcome to Sky Valley",
                    "year": 1994
                },
                {
                    "title": "...And the Circus Leaves Town",
                    "year": 1995
                }
            ]
        },
        {
            "name": "Ben Harper",
            "albums": [
                {
                    "title": "The Will to Live",
                    "year": 1997
                },
                {
                    "title": "Burn to Shine",
                    "year": 1999
                },
                {
                    "title": "Live from Mars",
                    "year": 2001
                },
                {
                    "title": "Diamonds on the Inside",
                    "year": 2003
                }
            ]
        }
    ]
};

const string = JSON.stringify(
    object, // JavaScript object
    (key, value) => { // Replacement function
        return value; // Return value determines target value
    },
    2 // Indentation
);

console.log(string);