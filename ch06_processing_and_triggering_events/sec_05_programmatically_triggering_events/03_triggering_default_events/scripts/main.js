// 6.5.3 Triggering Default Events
"use strict"

// Example of Triggering an Event for Mouse Clicks
function init() {
    const element = document.getElementById('example');
    const event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });
    element.addEventListener(
        'click',
        (event) => {
            console.log('Element clicked');
        },
        false
    );
    element.dispatchEvent(event);
}

document.addEventListener('DOMContentLoaded', init);