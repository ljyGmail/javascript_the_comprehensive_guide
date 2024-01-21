// 9.4.1 The XMLHttpRequest Object - Difference between  the load and readystatechange Events
"use strict"

// Using the onreadystatechange Event Handler
function init() {
    // Script for old browsers, hence the var keyword
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            const data = request.responseXML;
            const entries = data.getElementsByTagName('hello');
            console.log(entries.length);
            for (var i = 0; i < entries.length; i++) {
                /* Insert XML */
            }
        }
    };

    request.open('GET', 'content/data.xml', true);
    request.send(null);
}

document.addEventListener('DOMContentLoaded', init);