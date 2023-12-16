//  5.3.3 Modifying the HTML below an Element
"use strict"

// The innerHTML Property is Used to Evaluate Markup Contained in the Passed String
const element = document.querySelector('#news li:nth-child(1)');
element.innerHTML = '<strong>Record news:</strong> New  album by <em>Tool</em> not yet released.';

// THe innerHTML Property Also Contains the HTML Markup
const innerHTML = document.querySelector('#news li:nth-child(1)').innerHTML;
console.log(innerHTML);
// Output: <strong>Record news:</strong> New  album by <em>Tool</em> not yet released.