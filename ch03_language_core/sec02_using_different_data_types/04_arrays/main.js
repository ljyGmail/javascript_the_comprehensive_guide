// 3.2.4 Arrays

const shoppingCartItem1 = 'Record player'; // first item
const shoppingCartItem2 = 'Loudspeaker'; // second item
const shoppingCartItem3 = 'Preamplifier'; // third item
const shoppingCartItem4 = 'Loudspeaker cables'; // fourth item

const shoppingCart = [ // start of  array definition
    'Record player', // first entry
    'Loudspeaker', // second entry
    'Preamplifier', // third entry
    'Loudspeaker cables' // fourth entry
]; // end of array definition

const highscores = [74334, 24344, 54533, 32553, 67556];

// arrays can contain entries of different types
const values = [ // an array ...
    'John Doe', // ... with a string ...
    22, // ... a number ...
    true // ... and a Boolean
];

// The internal Structure of Arrays
const item1 = shoppingCart[0]; // first entry
const item2 = shoppingCart[1]; // second entry
const item3 = shoppingCart[2]; // third entry
const item4 = shoppingCart[3]; // fourth entry

console.log(item1);
console.log(item2);
console.log(item3);
console.log(item4);

// Multidimensional Arrays
const shoppingCart2 = [ // start of outer array
    [ // first entry
        'Record player', // first element in the first array
        200, // second element in the first array
        1 // third element in the first array
    ],
    [ // second entry
        'Loudspeaker', // first element in the second array
        400, // second element in the second array
        2 // third element in the second array
    ],
    [ // third entry
        'Preamplifier', // first element in the third array
        80, // second element in the third array
        1 // third element in the third array
    ],
    [ // fourth entry
        'Loudspeaker cables', // first element in the fourth array
        20, // second element in the fourth array
        2 // third element in the fourth array
    ]
]; // end of outer array

console.log(shoppingCart2[0][0]); // Output: Record player
console.log(shoppingCart2[0][1]); // Output: 200
console.log(shoppingCart2[0][2]); // Output: 1
console.log(shoppingCart2[1][0]); // Output: Loudspeaker
console.log(shoppingCart2[1][1]); // Output: 400
console.log(shoppingCart2[1][2]); // Output: 2
console.log(shoppingCart2[2][0]); // Output: Preamplifier
console.log(shoppingCart2[2][1]); // Output: 80
console.log(shoppingCart2[2][2]); // Output: 1
console.log(shoppingCart2[3][0]); // Output: Loudspeaker cables
console.log(shoppingCart2[3][1]); // Output: 20
console.log(shoppingCart2[3][2]); // Output: 2
