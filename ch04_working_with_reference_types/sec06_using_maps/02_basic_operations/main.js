// 4.6.2 Basic Operations
"use strict"

// Using Maps
const numbersOfAlbums = new Map(); // Create the map
numbersOfAlbums.set('Kyuss', 4); // Add multiple entries
numbersOfAlbums.set('Tool', 6);
numbersOfAlbums.set('Monster Magnet', 8);
numbersOfAlbums.set('Ben Harper', 9);
numbersOfAlbums.set('Queens of the Stone Age', 6);
console.log(numbersOfAlbums.get('Kyuss')); // Output: 4
console.log(numbersOfAlbums.size); // Output: 5
console.log(numbersOfAlbums.has('Kyuss')); // Output: true
numbersOfAlbums.delete('Kyuss'); // Delete an entry
console.log(numbersOfAlbums.has('Kyuss')); // Output: false
console.log(numbersOfAlbums.has('Justin Bieber')); // Output: false
numbersOfAlbums.clear(); // Clear all entries
console.log(numbersOfAlbums.size); // Output: 0

// Creation of a Map Using Method Chaining
const numbersOfAlbums2 = new Map() // Create a map ...
    .set('kyuss', 4)
    .set('Tool', 6)
    .set('Monster Magnet', 8)
    .set('Ben Harper', 9)
    .set('Queens of the Stone Age', 6);
console.log(numbersOfAlbums2.size); // Output: 5