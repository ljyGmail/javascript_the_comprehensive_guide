// 4.9.10 Replacing Occurrences within a String
"use strict"

// The replace() Method Can Be Used to Replace Occurrences in a String
let text = 'The private phone number is +49 30 1234567,' +
    ' the business phone number is +49 30 1234568.';
const regExp = /(\+?\d{2})\s(\d{2})\s(\d{5,7})/g;
text = text.replace(regExp, '<number hidden>');
console.log(text); // The private phone number is <number hidden>, the business phone number is <number hidden>.

// The New Value to Be Inserted Can Also Be Determined by a Function
let text2 = 'The private phone number is +49 30 1234567,' +
    ' the business phone number is +49 30 1234568.';
const regExp2 = /(\+?\d{2})\s(\d{2})\s(\d{5,7})/g;
text2 = text2.replace(regExp2, function (number) {
    return number.substring(0, 9) + 'XXXXX';
});
console.log(text2); // The private phone number is +49 30 12XXXXX, the business phone number is +49 30 12XXXXX.