// 5.5.4 Removing Attributes
"use strict"

// You Can Remove Attributes from an HTML Element Using the removeAttribute() Method
const element = document.getElementById('home');
element.removeAttribute('class');
element.removeAttribute('href');
console.log(element.getAttribute('class')); // null
console.log(element.getAttribute('href')); // null