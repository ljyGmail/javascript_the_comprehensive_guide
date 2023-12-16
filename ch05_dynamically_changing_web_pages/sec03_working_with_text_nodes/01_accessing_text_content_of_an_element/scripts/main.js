// 5.3.1 Accessing the Text Content of an Element
"use strict"

// The textContent Property Ignores Markup within the Corresponding Element
const textContent = document.querySelector('#news li:nth-child(1)').textContent;
console.log(textContent);
// Output: Record news: New album by Ben Harper released.