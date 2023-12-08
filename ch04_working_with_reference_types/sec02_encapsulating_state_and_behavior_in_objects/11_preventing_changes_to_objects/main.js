// 4.2.11 Preventing Changes to Objects
"use strict"

// @ Preventing Extensions to Objects
const john = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(Object.isExtensible(john)); // true

john.age = 44; // define new property
console.log(john.age); // 44
Object.preventExtensions(john); // prevent extensions
console.log(Object.isExtensible(john)); // false
john.firstName = 'James'; // permitted: change existing property
console.log(john.firstName); // "James"
console.log(Object.getOwnPropertyDescriptor(john, 'firstName').enumerable); // true
Object.defineProperty(john, 'firstName', { // permitted: change property attributes
    enumerable: false
});
console.log(Object.getOwnPropertyDescriptor(john, 'firstName').enumerable); // false
// john.weight = 88; // TypeError: Can't add property weight, object is not extensible

// @ Sealing Objects
const harry = {
    firstName: 'Harry',
    lastName: 'Potter'
};
console.log(Object.isExtensible(harry)); // true
console.log(Object.isSealed(harry)); // false
harry.age = 44; // define new property
console.log(harry.age); // 44
Object.seal(harry); // seal object
console.log(Object.isExtensible(harry)); // false
console.log(Object.isSealed(harry)); // true
harry.firstName = 'Ron'; // permitted: change existing property
console.log(harry.firstName); // "Ron"
console.log(Object.getOwnPropertyDescriptor(harry, 'firstName').enumerable); // true
/*
Object.defineProperty(harry, 'firstName', { // TypeError: cannot redefine property: firstName
    enumerable: false
});
 */

// @ Freezing Objects
const springboot = {
    firstName: 'Spring',
    lastName: 'Boot'
};

console.log(Object.isExtensible(springboot)); // true
console.log(Object.isSealed(springboot)); // false
console.log(Object.isFrozen(springboot)); // false
springboot.age = 44; // new property
console.log(springboot.age); // 44
Object.freeze(springboot); // freeze object
console.log(Object.isExtensible(springboot)); // false
console.log(Object.isSealed(springboot)); // true
console.log(Object.isFrozen(springboot)); // true
// springboot.firstName = 'James'; // TypeError: Cannot assign to read only property 'firstName' of object '#<Object>'

// @ Comparison of the Techniques Shown