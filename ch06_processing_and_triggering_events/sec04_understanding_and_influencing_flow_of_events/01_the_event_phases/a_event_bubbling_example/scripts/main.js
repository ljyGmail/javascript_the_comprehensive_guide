// 6.4.1 The Event Phases - Bubbling phase
"use strict"

// The Code for the Event Bubbling Example
function handler(evt) {
    const e = evt || window.event; // Get event
    const target = e.target || e.srcElement; // Target element
    this.classList.toggle('selected'); // CSS class
    console.log(`Clicked on node with ID "${target.id}"`); // Output clicked element
    console.log(`Event at node with ID "${this.id}"`); // Output current element
}

function init() {
    const elements = document.querySelectorAll( // All elements ...
        '.level1, ' + // ... of the first, ...
        '.level2, ' + // ... the second, ...
        '.level3'); // ... and the third level.
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener( // Get a listener for the click event.
            'click',
            handler,
            false
        );
    }
}

document.addEventListener('DOMContentLoaded', init);