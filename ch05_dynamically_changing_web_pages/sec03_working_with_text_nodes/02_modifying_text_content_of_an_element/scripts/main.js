// 5.3.2 Modifying the Text Content of an Element
"use strict"

// The textContent Property Can Be Used to Reset the Text Content of an Element
const firstElement = document.querySelector('#news li:nth-child(1)');
firstElement.textContent = 'Record news:  New album by Tool not yet released.';

// The Markup within the Specified String Is Not Evaluated
const secondElement = document.querySelector('#news li:nth-child(2)');
secondElement.textContent = '<strong>Record news:</strong> New album by <em>Tool</em> not yet released.';