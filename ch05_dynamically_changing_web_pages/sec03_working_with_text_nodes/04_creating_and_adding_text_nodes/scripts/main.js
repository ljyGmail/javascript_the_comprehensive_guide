// 5.3.4 Creating and Adding Text Nodes
"use strict"

// Creating and Adding a Text Node
const element = document.querySelector('#news li:nth-child(1)');
const textNode = document.createTextNode('Example');
element.appendChild(textNode);