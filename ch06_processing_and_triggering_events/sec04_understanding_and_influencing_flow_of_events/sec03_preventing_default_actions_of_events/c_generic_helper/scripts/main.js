// 6.4.3 Preventing Default Actions of Events - Generic Helper Function
"use strict"

// Helper Function for Preventing Default Actions
function stopDefault(e) {
    if (e && e.preventDefault) {
        e.preventDefault();
    } else if (window.event && window.event.returnValue) {
        window.event.returnValue = false;
    }
}

// Usage of the Helper Function
function handleLinkClicked(e) {
    console.log('Link clicked');
    stopDefault(e);
}

function init() {
    const element = document.getElementById('link');
    element.onclick = handleLinkClicked;
    const element2 = document.getElementById('link2');
    element2.addEventListener(
        'click',
        handleLinkClicked,
        false
    );
}

document.addEventListener('DOMContentLoaded', init);