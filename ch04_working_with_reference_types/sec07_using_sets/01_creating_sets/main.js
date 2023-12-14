// 4.7.1 Creating Sets
"use strict"

// When Creating a Set, the Elements Can Be Passed as an Array
const artists = new Set( // Create a set ...
    [                         // ... based on an array
        'Kyuss',
        'Kyuss',
        'Tool',
        'Monster Magnet',
        'Ben Harper',
        'Queens of the Stone Age'
    ]
);

console.log(artists.size); // Output: 5