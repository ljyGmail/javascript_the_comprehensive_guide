// 5.5.1 Reading the Value of an Attribute
"use strict"

function init() {
    // You Can Access Attributes of an HTML Element Using the getAttribute() Method
    const element = document.getElementById('home');
    console.log(element.getAttribute('id')); // home
    console.log(element.getAttribute('class')); // link
    console.log(element.getAttribute('href')); // index.html

    // The Attributes of an Element Are Also Available as Properties
    console.log(element.id); // home
    console.log(element.className); // link
    console.log(element.href); // index.html

    // Accessing Event Handlers and the style Attribute
    // Returns Different Return Values Depending on the Access Type
    const button = document.getElementById('create');
    console.log(button.onclick); // Output of the function object

    console.log(typeof button.onclick); // Output: function
    console.log(button.getAttribute('onclick')); // createContact()
    console.log(typeof button.getAttribute('onclick')); // Output: string
    console.log(button.style); // Output of CSSStyleDeclaration
    console.log(typeof button.style); // Output: object
    console.log(button.getAttribute('style')); // background-color: green
    console.log(typeof button.getAttribute('style')); // Output: string
}

function createContact() {
    console.log('Create contact');
}

document.addEventListener('DOMContentLoaded', init);