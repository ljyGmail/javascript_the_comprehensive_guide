// 3.3.4 Operators for Working with Boolean Values
"use strict"

const isLoggedIn = true;
const isAdmin = false;
const isLoggedInAndAdmin = isLoggedIn && isAdmin; // AND operator
const isLoggedInOrAdmin = isLoggedIn || isAdmin; // OR operator
const isLoggedOut = !isLoggedIn; // negation

console.log(`isLoggedInAndAdmin: ${isLoggedInAndAdmin}`); // false
console.log(`isLoggedInOrAdmin: ${isLoggedInOrAdmin}`); // true
console.log(`isLoggedOut: ${isLoggedOut}`); // false

// @ Boolean Operators for Non-Boolean Operands
// AND Operation
const john = {
    firstName: 'John',
    lastName: 'Doe'
};

const james = {
    firstName: 'James',
    lastName: 'Doe'
};

const isJohnAndJames = john && james;
console.log(isJohnAndJames);
// Output: Object {firstName: "James", lastName: "Doe"}

console.log(false && 'John'); // Output: false
console.log('John' && null); // Output null
console.log(null && 'John'); // Output: null

// OR Operation
const isJohnOrJames = john || james;
console.log(isJohnOrJames);
// Output: Object {firstName: "John", lastName: "Doe"}

console.log(false || 'John'); // Output: John
console.log('John' || null); // Output: John
console.log(null || 'John'); // Output: John

// Negate Operation
const name = 'John Doe';
const emptyString = '';
console.log(!name); // Output: false
console.log(!emptyString); // Output: true

const amount = 0;
const age = 25;
console.log(!amount); // Output: true
console.log(!age); // Output: false
console.log(!john); // Output: false
console.log(!null); // Output: true
console.log(!NaN); // Output: true
console.log(!undefined); // Output: true

// @ The Nullish Coalescing Operator
const someNullValue = null;
const someUndefinedValue = undefined;
const someNumber = 0;
const someText = '';
const someBoolean = false;

// Left operand is null --> return right operand
const a = someNullValue ?? 'Default value for null';
console.log(a);
// Output: Default value for null

// Left operand is undefined --> return right operand
const b = someUndefinedValue ?? 'Default value for undefined';
console.log(b)
// Output: Default value for undefined

// Left operand is 0 ("falsy") --> return left operand
const c = someNumber ?? 80;
console.log(c);
// Output: 0

// Left operand is an empty string ("falsy") --> return left operand
const d = someText ?? 'Default value for empty string';
console.log(d);
// Output: ''

// Left operand is false --> return left operand
const e = someBoolean ?? true;
console.log(e);
// Output: false

const x = 4711;

console.log({} ?? x); // {}
console.log(false ?? x); // false
console.log(x ?? null); // 4711
console.log(null ?? x); // 4711
console.log(null ?? null); // null
console.log(x ?? NaN); // 4711
console.log(NaN ?? x); // NaN
console.log(x ?? undefined); // 4711
console.log(undefined ?? x); // 4711
console.log(undefined ?? undefined); // undefined