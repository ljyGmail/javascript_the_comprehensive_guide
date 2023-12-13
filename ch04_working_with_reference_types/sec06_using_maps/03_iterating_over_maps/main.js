// 4.6.3 Iterating over Maps
"use strict"

// @ Iterating over the Keys of a Map

// Iteration over the Keys of a Map
const numbersOfAlbums = new Map( // Create a map ...
    [                                       // ... based on an array
        ['Kyuss', 4],
        ['Tool', 6],
        ['Monster Magnet', 8],
        ['Ben Harper', 9],
        ['Queens of the Stone Age', 6]
    ]
);

for (let artist of numbersOfAlbums.keys()) {
    console.log(artist);
}

// @@ THe for-of Loop

// Comparison of the Classic for-in Loop with the New for-of Loop
const numbers = [18, 22, 26, 30, 34];
numbers.name = "number array"; // Arrays are objects and can be extended  by properties.

// for-in loop
for (let i in numbers) {
    console.log(i); // 0, 1, 2, 3, 4, name
}

// for-of loop
for (let i of numbers) {
    console.log(i); // 18, 22, 26, 30, 34
}

// @ Iterating over the Values of a Map

// Iteration over the Values of a Map
for (let number of numbersOfAlbums.values()) {
    console.log(number);
}

// @ Iterating over the Key-Value Pairs of a Map

// Iteration over the Key-Value Pairs of a Map
for (let entry of numbersOfAlbums.entries()) {
    console.log(entry[0]); // Key
    console.log(entry[1]); // Value
}

// Alternative access via array destructuring:
for (let [bandName, numberOfAlbums] of numbersOfAlbums.entries()) {
    console.log(bandName);
    console.log(numberOfAlbums);
}

// Alternative Iteration over the Key-Value Paris of a Map
for (let entry of numbersOfAlbums) {
    console.log(entry[0]); // Key
    console.log(entry[1]); // Value
}

for (let [bandName, numberOfAlbums] of numbersOfAlbums) {
    console.log(bandName);
    console.log(numberOfAlbums);
}