// 4.9.7 Searching All Occurrences within a String
"use strict"

// The g Flag Can Be Used to Search for All Occurrences within a String
const text = 'The private phone number is +49 30 1234567,' +
    ' the business phone number is +49 30 1234568.';
const regExp = /\+?\d{2}\s\d{2}\s\d{5,7}/g;
let result;
while ((result = regExp.exec(text)) !== null) {
    console.log(
        'Number ' + result[0]
        + ' found at index ' + result.index
        + '.'
    );
}