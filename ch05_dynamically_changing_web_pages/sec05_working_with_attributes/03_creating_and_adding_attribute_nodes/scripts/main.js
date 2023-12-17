// 5.5.3 Creating and Adding Attribute Nodes
"use strict"

// Creating and Adding an Attribute Node
const element = document.getElementById('home');
const attribute = document.createAttribute('target');
attribute.value = '_blank';
element.setAttributeNode(attribute);
console.log(element.getAttribute('target')); // _blank