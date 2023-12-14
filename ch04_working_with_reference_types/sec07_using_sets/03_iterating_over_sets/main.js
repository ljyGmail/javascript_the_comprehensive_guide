// 4.7.3 Iterating over Sets
"use strict"

// The Individual Elements of a Set Can Be Iterated over Using a for-of Loop
const artists = new Set(
    [
        'Kyuss',
        'Tool',
        'Monster Magnet',
        'Ben Harper',
        'Queens of the Stone Age'
    ]
);

for (let artist of artists.keys()) {
    console.log(artist);
} // Output: "Kyuss", "Tool", "Monster Magnet", "Ben Harper", "Queens of the Stone Age"

for (let artist of artists.values()) {
    console.log(artist);
} // Output: "Kyuss", "Tool", "Monster Magnet", "Ben Harper", "Queens of the Stone Age"

for (let artist of artists.entries()) {
    console.log(artist[0]); // value, e.g. "Kyuss"
    console.log(artist[1]); // value, e.g. "Kyuss"
} // Output: "Kyuss", "Kyuss", "Tool", "Tool", "Monster Magnet", "Monster Magnet", "Ben Harper", "Ben Harper", "Queens of the Stone Age", "Queens of the Stone Age"

for (let artist of artists) {
    console.log(artist);
} // Output: "Kyuss", "Tool", "Monster Magnet", "Ben Harper", "Queens of the Stone Age"