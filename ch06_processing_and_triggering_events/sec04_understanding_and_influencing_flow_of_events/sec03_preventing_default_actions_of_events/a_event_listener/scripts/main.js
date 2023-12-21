// 6.4.3 Preventing Default Actions of Events - Event Listeners
"use strict"

// Preventing Default Actions for Event Listeners
function handleLinkClicked(e) {
    console.log('Link clicked');
    e.preventDefault();
}

function init() {
    const element = document.getElementById('link');
    element.addEventListener(
        'click',
        handleLinkClicked,
        false
    );
}

document.addEventListener('DOMContentLoaded', init);