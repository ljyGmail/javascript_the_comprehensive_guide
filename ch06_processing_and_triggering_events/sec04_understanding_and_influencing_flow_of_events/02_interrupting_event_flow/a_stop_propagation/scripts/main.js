// 6.4.2 Interrupting the Event FLow - stopPropagation()
"use strict"

// The Code for the Event Bubbling Example
function handler(evt) {
    const e = evt || window.event;
    const target = e.target || e.srcElement;
    this.classList.toggle('selected');
    console.log(`Clicked on node with ID "${target.id}"`);
    console.log(`Event at node with ID "${this.id}"`);

    if (this.classList.contains('level2')) {
        evt.stopPropagation();
    }
}

function init() {
    const elements = document.querySelectorAll(
        '.level1, ' +
        '.level2, ' +
        '.level3');
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(
            'click',
            handler,
            false
        );
    }
}

document.addEventListener('DOMContentLoaded', init);