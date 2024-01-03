// 8.2.1 Determining the Size and Position of a Browser Window
"use strict"

// Determining the Size and Position of a Browser Window
function init() {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(window.screenX);
    console.log(window.screenY);
}

document.addEventListener('DOMContentLoaded', init);