// 8.2.5 Opening New Browser Windows
"use strict"

// Opening a Browser Window
function init() {
    const linkOpen = document.getElementById('link-open');
    linkOpen.addEventListener('click', (e) => {
        const url = document.getElementById('url').value;
        window.open(
            url, // URL to open
            'Window title', // Name of the window
            'width=500, ' + // Width of the window
            'height=500, ' + // Height of the window
            'resizable=no, ' + // Resizing possible
            'scrollbar=1, ' + // Scrollbar enabled
            'status' // Status bar enabled
        );
    });
}

document.addEventListener('DOMContentLoaded', init);