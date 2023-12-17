// 5.5.2 Changing the Value of an Attribute or Adding a New Attribute
"use strict"

// You Can Change Existing Attributes of an HTML Element
// or Add New Attributes Using the set Attribute() Method
const element = document.getElementById('home');
element.setAttribute('class', 'link active');
element.setAttribute('href', 'newlink.html');
element.setAttribute('target', '_blank');
console.log(element.getAttribute('class')); // link active
console.log(element.getAttribute('href')); // newlink.html
console.log(element.getAttribute('target')); // _blank

// Attributes Can Also Be Changed Directly via Corresponding Propertieis
element.className = 'link active highlighted';
element.href = 'anotherLink.html';
element.target = '_self';
console.log(element.getAttribute('class')); // link active highlighted
console.log(element.getAttribute('href')); // anotherLink.html
console.log(element.getAttribute('target')); // _self