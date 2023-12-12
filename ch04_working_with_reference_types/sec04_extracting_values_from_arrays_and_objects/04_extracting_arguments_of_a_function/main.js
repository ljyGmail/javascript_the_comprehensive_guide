// 4.4.4 Extracting Arguments of a Function
"use strict"

// Extracting Function Arguments Using Destructuring
function printPerson(
    {
        firstName: firstName,
        lastName: lastName,
        contact: {
            email: email,
            phone: phone
        }
    }
) {
    console.log(`${firstName} ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
}

const person = {
    firstName: 'John',
    lastName: 'Doe',
    contact: {
        email: 'john.doe@javascripthandbook.en',
        phone: '02345/23456789'
    }
};

printPerson(person);

// Extracting Some of the Object Properties Using Destructuring
function printContactInformation(
    {
        contact: {
            email: email,
            phone: phone
        }
    }
) {
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
}

const person2 = {
    firstName: 'John',
    lastName: 'Doe',
    contact: {
        email: 'john.doe@jshandbook.en',
        phone: '12345/11112222'
    }
};

printContactInformation(person2);