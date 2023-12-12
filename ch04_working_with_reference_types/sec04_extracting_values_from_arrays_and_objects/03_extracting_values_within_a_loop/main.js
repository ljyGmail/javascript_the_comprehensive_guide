// 4.4.3 Extracting Values within a Loop
"use strict"

// Destructuring within a for-of Loop
const persons = [
    {
        firstName: 'John',
        lastName: 'Doe',
        contact: {
            email: 'john.doe@javascripthandbook.en',
            phone: '02345/23456789'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Smith',
        contact: {
            email: 'jane.smith@javascripthandbook.en',
            phone: '02345/23456789'
        }
    }
];

for (let
    {
        firstName: firstName,
        lastName: lastName,
        contact: {
            email: email,
            phone: phone
        }
    } of persons) {
    console.log(`${firstName} ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
}

// More Compact Notation for Destructuring in a for-of Loop
for (let {firstName: f, lastName: l, contact: {email: e, phone: p}} of persons) {
    console.log(`${f} ${l}`);
    console.log(`Email: ${e}`);
    console.log(`Phone: ${p}`);
}