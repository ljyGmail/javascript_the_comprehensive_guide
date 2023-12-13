// 4.5.4 Extracting Parts of a String
"use strict"

// Parts of a String Can Be Extracted vis the slice() Method
const name = 'Max Mustermann';
console.log(name.slice(0, 3)); // Output: "Max"
console.log(name.slice(4)); // Output: "Mustermann"
console.log(name.slice(4, 10)); // Output: "Muster"

// The slice() Method Can Also Be Passed Negative Numeric Values
console.log(name.slice(-10, -4)); // Output: "Muster"

// The substring() and substr() Methods Extract Parts from a String
console.log(name.substring(4, 10)); // Muster
console.log(name.substring(4)); // Mustermann
console.log(name.substr(4, 6)); // Muster
console.log(name.substr(4)); // Mustermann

// @@ More Methods for Strings

// The padStart() and padEnd() Methods Can Be Used to Pad Strings from the Beginning and the End
for (let i = 1; i < 15; i++) {
    console.log(`${i}`.padStart(3, '0'));
}
// Output consecutively:
// "001", "002", "003", "004", "005",
// "006", "007", "008", "009", "010",
// "011", "012", "013", "014"

for (let i = 1; i < 15; i++) {
    console.log(`${i}`.padEnd(3, '0'));
}
// Output consecutively:
// "100", "200", "300", "400", "500",
// "600", "700", "800", "900", "100",
// "110", "120", "130", "140"