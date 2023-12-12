// 4.4.2 Extracting Values from Objects
"use strict"

// Creating an Object Compared to Destructuring an Object
const person = {
    firstName: 'John',
    lastName: 'Doe'
};

const {
    firstName: firstNameExtracted,
    lastName: lastNameExtracted
} = person;

console.log(firstNameExtracted, lastNameExtracted);

// Object Destructuring for Variables and Object Properties of the Same Name
const {
    firstName,
    lastName
} = person;

console.log(firstName, lastName);

// @ Extracting Values from Nested Objects

// Object Destructuring of Nested Objects
const personNested = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        postCode: '23456',
        street: '22, Sample Street'
    }
};

const {
    firstName: firstNameExtractedNested,
    lastName: lastNameExtractedNested,
    address: {
        postCode: postCodeExtractedNested,
        street: streetExtractedNested
    }
} = personNested;

console.log(firstNameExtractedNested); // "John"
console.log(lastNameExtractedNested); // "Doe"
console.log(postCodeExtractedNested); // "23456"
console.log(streetExtractedNested); // "22, Sample Street"

// Object Destructuring of Nested Objects with Variables and Object Properties of the Same Name
const personSame = {
    firstNameSame: 'John',
    lastNameSame: 'Doe',
    addressSame: {
        postCodeSame: '23456',
        streetSame: '22, Sample Street'
    }
};

const {
    firstNameSame,
    lastNameSame,
    addressSame: {
        postCodeSame,
        streetSame
    }
} = personSame;

console.log(firstNameSame); // "John"
console.log(lastNameSame); // "Doe"
console.log(postCodeSame); // "23456"
console.log(streetSame); // "22, Sample Street"

const person2 = {
    firstName2: 'John',
    lastName2: 'Doe'
};

let firstName2;
({
    firstName2
}
    = person2);
console.log(firstName2);

// @ Combining Object Destructuring with Array Destructuring

// Object Destructuring in Combination with Array Destructuring
const personCombine = {
    firstNameCombine: 'John',
    lastNameCombine: 'Doe',
    addressCombine: {
        postCodeCombine: '23456',
        streetCombine: '22,  Sample Street'
    },
    phoneNumbersCombine: [
        '02345/23456786',
        '02345/23456789'
    ]
};

const {
    firstNameCombine: firstNameExtractedCombine,
    lastNameCombine: lastNameExtractedCombine,
    addressCombine: {
        postCodeCombine: postCodeExtractedCombine,
        streetCombine: streetExtractedCombine,
    },
    phoneNumbersCombine: [
        phoneNumber1ExtractedCombine,
        phoneNumber2ExtractedCombine
    ]
} = personCombine;

console.log(firstNameExtractedCombine); // "John"
console.log(lastNameExtractedCombine); // "Doe"
console.log(postCodeExtractedCombine); // "23456"
console.log(streetExtractedCombine); // "22, Sample Street"
console.log(phoneNumber1ExtractedCombine); // "02345/23456786"
console.log(phoneNumber2ExtractedCombine); // "02345/23456789"