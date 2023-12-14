// 4.7.2 Basic Operations of Sets
"use strict"

// Using Sets
const artists = new Set(); // Create the set
artists.add('Kyuss'); // Add different values
artists.add('Kyuss');
artists.add('Tool');
artists.add('Monster Magnet');
artists.add('Ben Harper');
artists.add('Queens of the Stone Age');
console.log(artists.size); // Output: 5
console.log(artists.has('Kyuss')); // Output: true
artists.delete('Kyuss'); // Delete a value
console.log(artists.has('Kyuss')); // Output: false
console.log(artists.has('Justin Bieber')); // Output: false
artists.clear(); // Clear all values
console.log(artists.size); // Output: 0

//  Creation of a Set Using Method of Chaining
const artists2 = new Set() // Create a set ...
    .add('Kyuss')                   // ... using chaining
    .add('Tool')
    .add('Monster Magnet')
    .add('Ben Harper')
    .add('Queens of the Stone Age');

console.log(artists2.size); // Output: 5
