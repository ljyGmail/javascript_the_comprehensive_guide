// 3.5.3 Passing and Evaluating Function Parameters
"use strict"

// @ Defining Functions with a Parameter
function showMessage(message) {
    console.log(message);
}

// @ Calling Functions with a Parameter
showMessage('James: Hello John');
showMessage('John: Hello James');

// @@ Parameters versus Arguments
function createNewUser(username, email, password) { // parameters

}

const john = createNewUser('John', 'john@example.com', 'secret'); // arguments

// @ Defining Functions with Multiple Parameters
function printPersonInformation(firstName, lastName, age) {
    console.log(`First name: ${firstName}`);
    console.log(`Last name: ${lastName}`);
    console.log(`age: ${age}`);
}

// @ Calling Functions with Multiple Parameters
printPersonInformation('John', 'Doe', 44);
printPersonInformation('James', 'Doe', 55);

// @ Calling Functions with Fewer Arguments than Specified Parameters
printPersonInformation('John', 'Doe');

// Check each parameter to see whether a corresponding argument has been passed.
function printPersonInformation2(firstName, lastName, age) {
    if (firstName !== undefined) {
        console.log(`First name: ${firstName}`);
    }
    if (lastName !== undefined) {
        console.log(`Last name: ${lastName}`);
    }
    if (age !== undefined) {
        console.log(`Age: ${age}`);
    }
}

// @ Calling Functions with More Arguments than Specified Parameters (Using the arguments Variable)
printPersonInformation('John', 'Doe', 44, 1.80);

function printPersonInformation3(firstName, lastName, age) {
    console.log(`First name: ${firstName}`);
    console.log(`Last name: ${lastName}`);
    console.log(`Age: ${age}`);

    if (arguments.length > 3) {
        console.log(`Size: ${arguments[3]}`);
    }

    if (arguments.length > 4) {
        console.log(`Weight: ${arguments[4]}`);
    }
}

printPersonInformation3('John', 'Doe', 44, 1.88, 88);

// @ Calling Functions with More Arguments than Specified Parameters (Using Rest Parameters)
function printPersonInformation4(firstName, lastName, age, ...restArgs) {
    console.log(`First name: ${firstName}`);
    console.log(`Last name: ${lastName}`);
    console.log(`Age: ${age}`);
    if (restArgs.length > 0) {
        console.log(`Size: ${restArgs[0]}`);
    }
    if (restArgs.length > 1) {
        console.log(`Weight: ${restArgs[1]}`);
    }
}

printPersonInformation4('John', 'Doe', 44, 1.88, 88);

// @ Functions with a Variable Number of Arguments
// An array parameter specified in the function declaration:
function sum(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    console.log(result);
}

sum([2, 3, 4, 5]); // Output: 14
sum([2, 3, 4, 5, 6, 7, 8, 9]); // Output: 44
sum([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]); // Output: 65

// Using rest parameters:
function sum2(...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    console.log(result);
}

sum2(2, 3, 4, 5); // Output: 14
sum2(2, 3, 4, 5, 6, 7, 8, 9); // Output: 44
sum2(2, 3, 4, 5, 6, 7, 8, 9, 10, 11); // Output: 65

// @ Defining Functions within Functions
function sum3(x, y) {
    const result = normalize(x) + normalize(y);

    function normalize(i) {
        if (i < 0) {
            return 0;
        }
        return i;
    }

    return result;
}

console.log(sum3(-5, 5)); // Output: 5
// console.log(normalize(-5)); // ReferenceError: normalize is not defined