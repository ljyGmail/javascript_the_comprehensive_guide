// 3.2.5 Special Data Types

// undefined
let name;
console.log(name); // Output: undefined
name = 'John Doe';
console.log(name) // Output: John Doe

// null
const dog = {
    name: 'Bello'
}

const person = {
    firstName: 'John',
    lastName: 'Doe',
    pet: dog
}

console.log(person.pet); // Output: Object {name: "Bello"}
person.pet = null;
console.log(person.pet); // Output: null
