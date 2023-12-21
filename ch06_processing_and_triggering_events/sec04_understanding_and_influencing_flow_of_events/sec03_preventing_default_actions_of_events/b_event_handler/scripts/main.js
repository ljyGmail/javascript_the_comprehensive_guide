// 6.4.3 Preventing Default Actions of Events - Event Handlers
"use strict"

// Preventing Default Actions for Event Handlers
function handleLinkClicked(e) {
    console.log('Link clicked');
    return false;
}

function init() {
    const element = document.getElementById('link');
    element.onclick = handleLinkClicked;
}

document.addEventListener('DOMContentLoaded', init);