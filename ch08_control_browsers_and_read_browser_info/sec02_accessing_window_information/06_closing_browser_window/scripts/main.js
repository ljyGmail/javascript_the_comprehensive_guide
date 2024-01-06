// 8.2.6 Closing the Browser Window
"use strict"

// Closing a Browser Window
function init() {
    let windowReference;
    const linkOpen = document.getElementById('link-open');
    const linkClose = document.getElementById('link-close');
    linkOpen.addEventListener('click', (e) => {
        const url = document.getElementById('url').value;
        windowReference = window.open(
            url,
            'Opened Window',
            'width=500,height=500,resizable,scrollbars=yes,status=1'
        );
    });
    linkClose.addEventListener('click', (e) => {
        windowReference.close();
    });
}

document.addEventListener('DOMContentLoaded', init);